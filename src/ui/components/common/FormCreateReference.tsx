import { Alert, Button, Input, notification, Upload, type GetProp, type UploadProps } from "antd";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { remove_non_ascii } from "../../../utils/files";
import { ModalPreview } from "./ModalPreview";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createReferenceToProfile as createReferenceToProfileFn } from "../../../service/reference/createToProfile";
import { createReferenceToProject as createReferenceToProjectFn } from "../../../service/reference/createToProject";
import type { Reference } from "../../../interfaces/reference";
import {
  initialFormReference as initialForm,
  initialFormReferenceErrors as initialErrors
} from "../../../constants";

interface FormCreateReferenceProps {
  target: "project" | "myProfile";
  projectId?: string;
}

const { Dragger } = Upload;
type FileType = Parameters<GetProp<UploadProps, 'beforeUpload'>>[0];

export function FormCreateReference({ target, projectId }: FormCreateReferenceProps) {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState(initialErrors);
  const [image, setImage] = useState<File | undefined>(undefined);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [api, contextHolder] = notification.useNotification();
  const queryClient = useQueryClient();
  const { t } = useTranslation();

  const {
    mutate: createReferenceToProfile,
    isPending: createReferenceToProfileLoading,
    error: createReferenceToProfileError
  } = useMutation({
    mutationFn: createReferenceToProfileFn,
    onSuccess: createReferenceToProfileSuccess
  });

  const {
    mutate: createReferenceToProject,
    isPending: createReferenceToProjectLoading,
    error: createReferenceToProjectError
  } = useMutation({
    mutationFn: createReferenceToProjectFn,
    onSuccess: createReferenceToProjectSuccess
  });

  function isFormValid() {
    let isValid = true;
    const newErrors = { ...initialErrors };

    if (!form.name.trim()) {
      isValid = false;
      newErrors.name = t("contact.nameRequired");
    }
    if (!form.role.trim()) {
      isValid = false;
      newErrors.role = t("contact.roleRequired");
    }
    if (!form.place.trim()) {
      isValid = false;
      newErrors.place = t("contact.placeRequired");
    }
    if (!form.message.trim()) {
      isValid = false;
      newErrors.message = t("contact.messageRequired");
    }
    if (!image) {
      isValid = false;
      newErrors.image = t("contact.imageRequired");
    }
    if (!isValid) setErrors(newErrors);
    return isValid;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!isFormValid()) return;

    const formData: FormData = new FormData();
    formData.append("name", form.name);
    formData.append("role", form.role);
    formData.append("place", form.place);
    formData.append("description", form.message);
    formData.append("image", image as FileType, remove_non_ascii("file.name"));

    if (target == "myProfile") createReferenceToProfile(formData);
    if (target == "project") createReferenceToProject({ payload: formData, projectId: projectId! });
  }

  function createReferenceToProfileSuccess(createdReference: Reference) {
    api.success({ message: "Referencia creada satisfactoriamente" });
    queryClient.setQueryData<Reference[]>(
      ["references", "profile"],
      (oldData) => (
        oldData
          ? [...oldData, createdReference]
          : [createdReference]
      )
    );
    clearForm();
  }

  function createReferenceToProjectSuccess(createdReference: Reference) {
    api.success({ message: "Referencia creada satisfactoriamente" });
    queryClient.setQueryData<Reference[]>(
      ["projectReferences", projectId],
      (oldData) => (
        oldData
          ? [...oldData, createdReference]
          : [createdReference]
      )
    );
    clearForm();
  }

  function onInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    if (errors[name as keyof typeof errors]) setErrors({ ...errors, [name]: "" });
    setForm({ ...form, [name]: value });
  }

  function handleImageUpload(file: FileType) {
    if (errors.image) setErrors({ ...errors, image: "" });
    const previewUrl = URL.createObjectURL(file);
    setImagePreview(previewUrl);
    setImage(file);
    return false;
  }

  function clearForm() {
    setForm(() => initialForm);
    setErrors(() => initialErrors);
    clearImage();
  }

  function clearImage() {
    setImage(undefined);
    setImagePreview(null);
    if (imagePreview) URL.revokeObjectURL(imagePreview)
    if (errors.image) setErrors({ ...errors, image: "" });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid xl:grid-cols-3 grid-cols-1 gap-4 border border-gray-200 rounded-md w-full p-8 bg-white dark:bg-zinc-800 dark:border-zinc-700 dark:text-zinc-300"
    >
      {contextHolder}
      <span className="text-gray-500 font-bold dark:text-zinc-300">{t("contact.references")}</span>
      <p className="col-span-3 text-gray-500 text-sm dark:text-zinc-300">{t("contact.referencesDescription")}</p>

      <div className="flex flex-col gap-2 xl:col-span-1 col-span-3">
        <label
          htmlFor="name"
          className={`text-gray-500 text-sm dark:text-zinc-300 ${errors.name && "!text-red-500"}`}
        >
          <span className="text-red-500">* </span>
          {t("contact.name")}
        </label>
        <Input
          id="name"
          name="name"
          placeholder={t("contact.name")}
          onChange={onInputChange}
          value={form.name}
          status={errors.name ? "error" : undefined}
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-2 xl:col-span-1 col-span-3">
        <label
          htmlFor="role"
          className={`text-gray-500 text-sm dark:text-zinc-300 ${errors.role && "!text-red-500"}`}
        >
          <span className="text-red-500">* </span>
          {t("contact.role")}
        </label>
        <Input
          id="role"
          name="role"
          placeholder={t("contact.role")}
          onChange={onInputChange}
          value={form.role}
          status={errors.role ? "error" : undefined}
        />
        {errors.role && <span className="text-red-500 text-sm">{errors.role}</span>}
      </div>

      <div className="flex flex-col gap-2 xl:col-span-1 col-span-3">
        <label
          htmlFor="place"
          className={`text-gray-500 text-sm dark:text-zinc-300 ${errors.place && "!text-red-500"}`}
        >
          <span className="text-red-500">* </span>
          {t("contact.place")}
        </label>
        <Input
          id="place"
          name="place"
          placeholder={t("contact.placePlaceholder")}
          onChange={onInputChange}
          value={form.place}
          status={errors.place ? "error" : undefined}
        />
        {errors.place && <span className="text-red-500 text-sm">{errors.place}</span>}
      </div>

      <div className="flex flex-col gap-2 col-span-3">
        <label
          htmlFor="message"
          className={`text-gray-500 text-sm dark:text-zinc-300 ${errors.message && "!text-red-500"}`}
        >
          <span className="text-red-500">* </span>
          {t("contact.message")}
        </label>
        <Input.TextArea
          id="message"
          name="message"
          placeholder={t("contact.message")}
          autoSize={{ minRows: 4, maxRows: 6 }}
          onChange={onInputChange}
          value={form.message}
          status={errors.message ? "error" : undefined}
        />
        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
      </div>

      <div className="flex flex-col gap-2 col-span-3">
        <label
          htmlFor="image"
          className={`text-gray-500 text-sm dark:text-zinc-300 ${errors.image && "!text-red-500"}`}
        >
          <span className="text-red-500">* </span>
          {t("contact.image")}
        </label>

        {imagePreview ? (
          <div className="relative flex justify-center">
            <img
              src={imagePreview}
              alt="Preview"
              className="w-40 h-40 object-cover rounded-full border border-gray-200 dark:border-zinc-600"
            />
          </div>
        ) : (
          <Dragger
            name="image"
            accept=".png,.jpg,.jpeg,image/png,image/jpeg"
            showUploadList={false}
            beforeUpload={handleImageUpload}
          >
            <span className="!text-zinc-300 !text-5xl material-symbols-outlined">photo_camera_front</span>
            <p className="ant-upload-text">{t("contact.uploadInstructions")}</p>
            <p className="ant-upload-hint">{t("contact.uploadDetails")}</p>
          </Dragger>
        )}
        {errors.image && <span className="text-red-500 text-sm">{errors.image}</span>}
      </div>

      {(createReferenceToProfileError || createReferenceToProjectError) && (
        <Alert
          type="error"
          message="Algo salió mal :("
          description={createReferenceToProfileError?.message || createReferenceToProjectError?.message}
          className="xl:col-span-3 col-span-1"
          rootClassName="w-full"
        />
      )}

      <div className="xl:col-span-3 col-span-1 flex xl:flex-row flex-col xl:justify-between xl:gap-0 gap-4">
        <Button
          disabled={!imagePreview || createReferenceToProfileLoading || createReferenceToProjectLoading}
          onClick={clearImage}
        >
          {t("contact.removeImage")}
        </Button>
        <div className="flex gap-4 xl:flex-row flex-col">
          <Button
            onClick={() => setIsPreviewModalOpen(true)}
            className="w-fit"
            disabled={createReferenceToProfileLoading || createReferenceToProjectLoading}
          >
            {t("contact.preview")}
          </Button>
          <Button
            type="primary"
            htmlType="submit"
            className="w-fit"
            loading={createReferenceToProfileLoading || createReferenceToProjectLoading}
          >
            {t("contact.send")}
          </Button>
        </div>
      </div>

      <ModalPreview
        description={form.message}
        name={form.name}
        onClose={() => setIsPreviewModalOpen(false)}
        open={isPreviewModalOpen}
        place={form.place}
        role={form.role}
        img={imagePreview}
      />
    </form>
  );
}
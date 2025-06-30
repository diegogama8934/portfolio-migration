import { Button, Modal } from "antd";
import { useTranslation } from "react-i18next";
import { ReferenceCard } from "./ReferenceCard";
import type { Reference } from "../../../interfaces/reference";

interface ModalPreviewProps extends Reference {
  open: boolean;
  onClose: VoidFunction;
}

export function ModalPreview({ onClose, open, description, name, place, role, img }: ModalPreviewProps) {
  const { t } = useTranslation();


  return (
    <Modal
      title={t("contact.preview")}
      open={open}
      onCancel={onClose}
      footer={[]}
    >
      <p className="dark:text-zinc-400 text-zinc-500 mb-4">{t("contact.previewDescription")}</p>
      <ReferenceCard
        description={description}
        name={name}
        place={place}
        role={role}
        img={img}
      />
      <div className="flex justify-end mt-4">
        <Button
          onClick={onClose}
        >
          {t("contact.close")}
        </Button>
      </div>
    </Modal>
  );
}
import { useParams } from "react-router";
import { useTranslation } from "react-i18next";
import { FormCreateReference } from "../components/common/FormCreateReference";
import { Empty } from "antd";

export function ProjectDetails() {
  const { t } = useTranslation();
  const { id: projectId } = useParams();

  return (
    <div className="flex flex-col items-center justify-center mb-40">
      <div className="flex flex-col gap-4 w-full items-center justify-center">
        <h1 className="section-title">TEACH</h1>
        <p className="section-description">
          {t("projects.teachDescription")}
        </p>
      </div>

      <div className="flex gap-4 mt-12">
        <aside className="w-52 hidden md:block sticky top-20 h-fit -ml-52 mt-2">
          <ul className="list-none pl-8 flex flex-col gap-4">
            <li className="w-full">
              <a href="#problem" className="text-gray-400 w-full block hover:text-gray-600 text">General resume</a>
            </li>
            <li className="w-full">
              <a href="#solution" className="text-gray-400 w-full block hover:text-gray-600 text">Context and problem</a>
            </li>
            <li className="w-full">
              <a href="#role" className="text-gray-400 w-full block hover:text-gray-600 text">Role and contribution</a>
            </li>
            <li className="w-full">
              <a href="#process" className="text-gray-400 w-full block hover:text-gray-600 text">Development process</a>
            </li>
            <li className="w-full">
              <a href="#results" className="text-gray-400 w-full block hover:text-gray-600 text">Results and learnings</a>
            </li>
            <li className="w-full">
              <a href="#results" className="text-gray-400 w-full block hover:text-gray-600 text">Links and resources</a>
            </li>
            <li className="w-full">
              <a href="#results" className="text-gray-400 w-full block hover:text-gray-600 text">Testimonials and comments</a>
            </li>
          </ul>
        </aside>

        <article className="flex gap-20 w-full max-w-[800px]">
          <main className="flex flex-col gap-4 flex-1">
            <h2 className="section-description !text-left !font-medium" id="description">General resume</h2>
            <p className="section-paragraph !text-left !leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue mi ut ipsum condimentum tincidunt. Integer fringilla felis vitae dictum posuere. Nulla varius mattis massa dapibus fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sapien dolor, feugiat hendrerit urna eget, fermentum ornare tortor. Morbi a aliquet turpis. Cras eu pellentesque nulla, nec malesuada enim. Nunc maximus libero sit amet egestas sollicitudin. Etiam dolor neque, aliquet vitae sagittis nec, suscipit sed ipsum. Morbi tincidunt odio dui, eget dignissim lorem fringilla eget. Pellentesque eget nibh ac augue volutpat rutrum. Morbi suscipit placerat lacus vitae pellentesque.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Suspendisse nec velit orci. Donec vitae diam ac diam sodales pretium et ac neque. Curabitur congue odio non purus porta, nec suscipit erat luctus. Donec vel scelerisque diam. Phasellus scelerisque mi non dolor gravida, sodales rutrum lectus hendrerit. Aenean consectetur vulputate leo. Donec ut lectus eu sem sodales porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at efficitur ipsum. Cras dignissim, nisi et pellentesque varius, orci nisl fringilla est, sit amet accumsan elit nunc vitae leo. In at vehicula magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Morbi eleifend tellus ut risus mattis tincidunt. Vestibulum viverra facilisis odio, vitae posuere sem mollis quis. Nam nec sapien vitae erat semper accumsan. Aenean pharetra eu lacus sed gravida. Morbi sem magna, tempus sit amet tellus in, consectetur vehicula dolor. Aliquam in urna a ante laoreet malesuada. In in quam eget dolor euismod accumsan eget eget lectus. Aliquam eget porta purus. Etiam aliquam lacus eu leo convallis elementum. Aliquam dolor nisl, posuere a metus vel, pharetra suscipit lacus.
            </p>

            <h2 className="section-description mt-8 !text-left !font-medium" id="problem">Context and problem</h2>
            <p className="section-paragraph !text-left !leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue mi ut ipsum condimentum tincidunt. Integer fringilla felis vitae dictum posuere. Nulla varius mattis massa dapibus fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sapien dolor, feugiat hendrerit urna eget, fermentum ornare tortor. Morbi a aliquet turpis. Cras eu pellentesque nulla, nec malesuada enim. Nunc maximus libero sit amet egestas sollicitudin. Etiam dolor neque, aliquet vitae sagittis nec, suscipit sed ipsum. Morbi tincidunt odio dui, eget dignissim lorem fringilla eget. Pellentesque eget nibh ac augue volutpat rutrum. Morbi suscipit placerat lacus vitae pellentesque.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Suspendisse nec velit orci. Donec vitae diam ac diam sodales pretium et ac neque. Curabitur congue odio non purus porta, nec suscipit erat luctus. Donec vel scelerisque diam. Phasellus scelerisque mi non dolor gravida, sodales rutrum lectus hendrerit. Aenean consectetur vulputate leo. Donec ut lectus eu sem sodales porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at efficitur ipsum. Cras dignissim, nisi et pellentesque varius, orci nisl fringilla est, sit amet accumsan elit nunc vitae leo. In at vehicula magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Morbi eleifend tellus ut risus mattis tincidunt. Vestibulum viverra facilisis odio, vitae posuere sem mollis quis. Nam nec sapien vitae erat semper accumsan. Aenean pharetra eu lacus sed gravida. Morbi sem magna, tempus sit amet tellus in, consectetur vehicula dolor. Aliquam in urna a ante laoreet malesuada. In in quam eget dolor euismod accumsan eget eget lectus. Aliquam eget porta purus. Etiam aliquam lacus eu leo convallis elementum. Aliquam dolor nisl, posuere a metus vel, pharetra suscipit lacus.
            </p>

            <h2 className="section-description mt-8 !text-left !font-medium" id="role">Role and contribution</h2>
            <p className="section-paragraph !text-left !leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue mi ut ipsum condimentum tincidunt. Integer fringilla felis vitae dictum posuere. Nulla varius mattis massa dapibus fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sapien dolor, feugiat hendrerit urna eget, fermentum ornare tortor. Morbi a aliquet turpis. Cras eu pellentesque nulla, nec malesuada enim. Nunc maximus libero sit amet egestas sollicitudin. Etiam dolor neque, aliquet vitae sagittis nec, suscipit sed ipsum. Morbi tincidunt odio dui, eget dignissim lorem fringilla eget. Pellentesque eget nibh ac augue volutpat rutrum. Morbi suscipit placerat lacus vitae pellentesque.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Suspendisse nec velit orci. Donec vitae diam ac diam sodales pretium et ac neque. Curabitur congue odio non purus porta, nec suscipit erat luctus. Donec vel scelerisque diam. Phasellus scelerisque mi non dolor gravida, sodales rutrum lectus hendrerit. Aenean consectetur vulputate leo. Donec ut lectus eu sem sodales porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at efficitur ipsum. Cras dignissim, nisi et pellentesque varius, orci nisl fringilla est, sit amet accumsan elit nunc vitae leo. In at vehicula magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Morbi eleifend tellus ut risus mattis tincidunt. Vestibulum viverra facilisis odio, vitae posuere sem mollis quis. Nam nec sapien vitae erat semper accumsan. Aenean pharetra eu lacus sed gravida. Morbi sem magna, tempus sit amet tellus in, consectetur vehicula dolor. Aliquam in urna a ante laoreet malesuada. In in quam eget dolor euismod accumsan eget eget lectus. Aliquam eget porta purus. Etiam aliquam lacus eu leo convallis elementum. Aliquam dolor nisl, posuere a metus vel, pharetra suscipit lacus.
            </p>

            <h2 className="section-description mt-8 !text-left !font-medium" id="process">Development process</h2>
            <p className="section-paragraph !text-left !leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue mi ut ipsum condimentum tincidunt. Integer fringilla felis vitae dictum posuere. Nulla varius mattis massa dapibus fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sapien dolor, feugiat hendrerit urna eget, fermentum ornare tortor. Morbi a aliquet turpis. Cras eu pellentesque nulla, nec malesuada enim. Nunc maximus libero sit amet egestas sollicitudin. Etiam dolor neque, aliquet vitae sagittis nec, suscipit sed ipsum. Morbi tincidunt odio dui, eget dignissim lorem fringilla eget. Pellentesque eget nibh ac augue volutpat rutrum. Morbi suscipit placerat lacus vitae pellentesque.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Suspendisse nec velit orci. Donec vitae diam ac diam sodales pretium et ac neque. Curabitur congue odio non purus porta, nec suscipit erat luctus. Donec vel scelerisque diam. Phasellus scelerisque mi non dolor gravida, sodales rutrum lectus hendrerit. Aenean consectetur vulputate leo. Donec ut lectus eu sem sodales porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at efficitur ipsum. Cras dignissim, nisi et pellentesque varius, orci nisl fringilla est, sit amet accumsan elit nunc vitae leo. In at vehicula magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Morbi eleifend tellus ut risus mattis tincidunt. Vestibulum viverra facilisis odio, vitae posuere sem mollis quis. Nam nec sapien vitae erat semper accumsan. Aenean pharetra eu lacus sed gravida. Morbi sem magna, tempus sit amet tellus in, consectetur vehicula dolor. Aliquam in urna a ante laoreet malesuada. In in quam eget dolor euismod accumsan eget eget lectus. Aliquam eget porta purus. Etiam aliquam lacus eu leo convallis elementum. Aliquam dolor nisl, posuere a metus vel, pharetra suscipit lacus.
            </p>

            <h2 className="section-description mt-8 !text-left !font-medium" id="results">Results and learnings</h2>
            <p className="section-paragraph !text-left !leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In congue mi ut ipsum condimentum tincidunt. Integer fringilla felis vitae dictum posuere. Nulla varius mattis massa dapibus fringilla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse sapien dolor, feugiat hendrerit urna eget, fermentum ornare tortor. Morbi a aliquet turpis. Cras eu pellentesque nulla, nec malesuada enim. Nunc maximus libero sit amet egestas sollicitudin. Etiam dolor neque, aliquet vitae sagittis nec, suscipit sed ipsum. Morbi tincidunt odio dui, eget dignissim lorem fringilla eget. Pellentesque eget nibh ac augue volutpat rutrum. Morbi suscipit placerat lacus vitae pellentesque.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Suspendisse nec velit orci. Donec vitae diam ac diam sodales pretium et ac neque. Curabitur congue odio non purus porta, nec suscipit erat luctus. Donec vel scelerisque diam. Phasellus scelerisque mi non dolor gravida, sodales rutrum lectus hendrerit. Aenean consectetur vulputate leo. Donec ut lectus eu sem sodales porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Curabitur at efficitur ipsum. Cras dignissim, nisi et pellentesque varius, orci nisl fringilla est, sit amet accumsan elit nunc vitae leo. In at vehicula magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            </p>
            <p className="section-paragraph !text-left !leading-loose">
              Morbi eleifend tellus ut risus mattis tincidunt. Vestibulum viverra facilisis odio, vitae posuere sem mollis quis. Nam nec sapien vitae erat semper accumsan. Aenean pharetra eu lacus sed gravida. Morbi sem magna, tempus sit amet tellus in, consectetur vehicula dolor. Aliquam in urna a ante laoreet malesuada. In in quam eget dolor euismod accumsan eget eget lectus. Aliquam eget porta purus. Etiam aliquam lacus eu leo convallis elementum. Aliquam dolor nisl, posuere a metus vel, pharetra suscipit lacus.
            </p>


            <h2 className="section-description mt-8 !text-left !font-medium" id="links">Links and resources</h2>
            <a
              href="https://www.figma.com/design/2kudpkoGf73ckYiZyxkCvC/TEACH?node-id=0-1&t=UPjhdnu53ZJ7qdjY-1"
              target="_blank"
              className="project-link group"
            >
              <span className="!text-zinc-400 material-symbols-outlined group-hover:!text-zinc-600 transition-all duration-300">design_services</span>
              <span className="section-paragraph !text-left group-hover:!text-zinc-600 transition-all duration-300">
                Watch Figma design file
              </span>
            </a>

            <a
              href="https://github.com/diegogama8934/teach"
              target="_blank"
              className="project-link group"
            >
              <span className="!text-zinc-400 material-symbols-outlined group-hover:!text-zinc-600 transition-all duration-300">code</span>
              <span className="section-paragraph !text-left group-hover:!text-zinc-600 transition-all duration-300">
                Watch code repository
              </span>
            </a>

            <a
              href="https://teach-opal.vercel.app/"
              target="_blank"
              className="project-link group"
            >
              <span className="!text-zinc-400 material-symbols-outlined group-hover:!text-zinc-600 transition-all duration-300">public</span>
              <span className="section-paragraph !text-left group-hover:!text-zinc-600 transition-all duration-300">
                Watch website
              </span>
            </a>


            <h2 className="section-description mt-8 !text-left !font-medium" id="testimonials">Testimonials and comments</h2>
            <FormCreateReference
              target="project"
              projectId={projectId}
            />

            <div className="flex flex-col w-full mt-8">
              <Empty description={t("contact.emptyReferences")} />
            </div>

          </main>

        </article>
      </div>
    </div>
  )
}
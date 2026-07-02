import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"
import { pathToRoot } from "../../util/path"

const Header = HeaderConstructor()

function SidebarBrand({ componentData }: Pick<PageFrameProps, "componentData">) {
  const slug = componentData.fileData.slug
  if (!slug) return null

  const baseDir = pathToRoot(slug)
  const title = componentData.cfg.pageTitle

  return (
    <>
      <div class="sidebar-brand">
        <img
          class="sidebar-brand-logo sidebar-brand-logo-light"
          src={`${baseDir}/logo.svg`}
          alt=""
          aria-hidden="true"
        />
        <img
          class="sidebar-brand-logo sidebar-brand-logo-dark"
          src={`${baseDir}/logo-dark.svg`}
          alt=""
          aria-hidden="true"
        />
        <a href={baseDir} aria-label={title}>
          <span style="font-weight: 500;">{title}</span>
        </a>
      </div>
    </>
  )
}

/**
 * The default page frame — three-column layout with left sidebar, center
 * content (header + body + afterBody), and right sidebar, followed by a footer.
 *
 * This is the original Quartz layout, extracted from renderPage.tsx.
 */
export const DefaultFrame: PageFrame = {
  name: "default",
  render({
    componentData,
    header,
    beforeBody,
    pageBody: Content,
    afterBody,
    left,
    right,
    footer: Footer,
  }: PageFrameProps) {
    return (
      <>
        <div class="left sidebar">
          <SidebarBrand componentData={componentData} />
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
          <div class="page-header">
            <Header {...componentData}>
              {header.map((HeaderComponent) => (
                <HeaderComponent {...componentData} />
              ))}
            </Header>
            <div class="popover-hint">
              {beforeBody.map((BodyComponent) => (
                <BodyComponent {...componentData} />
              ))}
            </div>
          </div>
          <Content {...componentData} />
          <hr />
          <div class="page-footer">
            {afterBody.map((BodyComponent) => (
              <BodyComponent {...componentData} />
            ))}
          </div>
        </div>
        <div class="right sidebar">
          {right.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <Footer {...componentData} />
      </>
    )
  },
}

DefaultFrame.css = `
.sidebar-brand {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 2rem;
  align-items: center;
}

.sidebar-brand a {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  color: var(--secondary);
  font-family: var(--titleFont);
  font-size: 2.1rem;
  line-height: 1;
  text-decoration: none;
}

.sidebar-brand-logo {
  display: block;
  width: 9.5rem;
  aspect-ratio: 128.30489 / 137.81667;
  object-fit: contain;
}

:root[saved-theme="dark"] .sidebar-brand-logo-light,
:root[saved-theme="light"] .sidebar-brand-logo-dark {
  display: none;
}

@media all and (max-width: 800px) {
  .sidebar-brand {
    margin: 0;
  }

  .sidebar-brand a {
    font-size: 1.1rem;
  }

  .sidebar-brand-logo {
    width: 2rem;
  }
}
`

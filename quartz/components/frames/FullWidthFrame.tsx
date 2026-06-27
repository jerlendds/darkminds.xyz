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
    <div class="sidebar-brand">
      <a href={baseDir} aria-label={title}>
        <span
          class="sidebar-brand-logo"
          aria-hidden="true"
          style={{ "--logo-url": `url("${baseDir}/logo.svg")` }}
        />
        <span>{title}</span>
      </a>
    </div>
  )
}

function isIndexPage({ componentData }: Pick<PageFrameProps, "componentData">) {
  const slug = componentData.fileData.slug
  return slug === "index" || slug?.endsWith("/index")
}

/**
 * Full-width page frame — no sidebars. The center content area spans the
 * full width of the page. Header, beforeBody, body, afterBody, and footer
 * are all rendered in a single column.
 *
 * Useful for page types like Canvas, presentations, or dashboards that
 * need maximum horizontal space.
 */
export const FullWidthFrame: PageFrame = {
  name: "full-width",
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
    const showIndexWidgets = isIndexPage({ componentData })

    if (showIndexWidgets) {
      return (
        <>
          <div class="center full-width">
            <div class="index-aside-layout">
              <aside class="index-aside index-aside-left">
                <SidebarBrand componentData={componentData} />
                {left.map((BodyComponent) => (
                  <BodyComponent {...componentData} />
                ))}
              </aside>
              <main class="index-main">
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
              </main>
              <aside class="index-aside index-aside-right">
                {right.map((BodyComponent) => (
                  <BodyComponent {...componentData} />
                ))}
              </aside>
            </div>
          </div>
          <Footer {...componentData} />
        </>
      )
    }

    return (
      <>
        <div class="center full-width">
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
        <Footer {...componentData} />
      </>
    )
  },
}

FullWidthFrame.css = `
.sidebar-brand {
  display: flex;
  justify-content: flex-start;
  margin: 0 0 1.5rem;
}

.sidebar-brand a {
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  color: var(--secondary);
  font-family: var(--titleFont);
  font-size: 1.35rem;
  line-height: 1;
  text-decoration: none;
}

.sidebar-brand-logo {
  display: block;
  width: 2.5rem;
  aspect-ratio: 128.30489 / 137.81667;
  flex: 0 0 auto;
  color: var(--dark);
  background-color: currentColor;
  mask: var(--logo-url) center / contain no-repeat;
  -webkit-mask: var(--logo-url) center / contain no-repeat;
}

.index-aside-layout {
  display: grid;
  grid-template-columns: minmax(12rem, 18rem) minmax(0, 48rem) minmax(14rem, 20rem);
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  align-items: start;
  width: 100%;
}

.index-main,
.index-aside {
  min-width: 0;
}

.index-main {
  max-width: 48rem;
  margin: 0 auto;
  width: 100%;
}

.index-aside {
  position: sticky;
  top: 0;
}

.index-aside-left {
  min-height: 100vh;
  border-right: 1px solid var(--lightgray);
  padding: 1.5rem 1.5rem 2rem 0;
}

.index-aside .mobile-only,
.index-aside .flex-component,
.index-aside .backlinks {
  display: none !important;
}

.index-aside .explorer,
.index-aside .graph {
  margin: 0;
}

.index-aside .graph h3 {
  margin-top: 0;
}

@media all and (max-width: 1100px) {
  .index-aside-layout {
    grid-template-columns: 1fr;
  }

  .index-aside {
    position: static;
  }

  .index-aside-left {
    min-height: 0;
    border-right: 0;
    padding: 0;
  }

  .index-aside-left {
    order: 2;
  }

  .index-main {
    order: 1;
  }

  .index-aside-right {
    order: 3;
  }
}
`

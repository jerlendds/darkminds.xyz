import { PageFrame, PageFrameProps } from "./types"
import HeaderConstructor from "../Header"
import { pathToRoot } from "../../util/path"

const Header = HeaderConstructor()

function IndexBrand({ componentData }: Pick<PageFrameProps, "componentData">) {
  const slug = componentData.fileData.slug
  if (!slug) return null

  const isIndexPage = slug === "index" || slug?.endsWith("/index")
  if (!isIndexPage) return null

  const baseDir = pathToRoot(slug)
  const title = componentData.cfg.pageTitle

  return (
    <div class="index-brand">
      <a href={baseDir} aria-label={title}>
        <img src={`${baseDir}/logo.svg`} alt="" />
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
            <IndexBrand componentData={componentData} />
            <div class="index-aside-layout">
              <aside class="index-aside index-aside-left">
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
          <IndexBrand componentData={componentData} />
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
.index-brand {
  display: flex;
  justify-content: center;
  margin: 0.25rem 0 2rem;
  text-align: center;
}

.index-brand a {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.65rem;
  color: white;
  font-size: clamp(1rem, 8vw, 2.5rem);
  line-height: 0.95;
  text-decoration: none;
}

.index-brand img {
  display: block;
  width: clamp(6.66rem, 14vw, 11.5rem);
  height: auto;
}

.index-aside-layout {
  display: grid;
  grid-template-columns: minmax(12rem, 18rem) minmax(0, 48rem) minmax(14rem, 20rem);
  gap: 1.5rem;
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
  top: 1rem;
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

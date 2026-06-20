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
          {left.map((BodyComponent) => (
            <BodyComponent {...componentData} />
          ))}
        </div>
        <div class="center">
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
  color: var(--secondary);
  font-family: var(--titleFont);
  font-size: clamp(2rem, 8vw, 4.5rem);
  line-height: 0.95;
  text-decoration: none;
}

.index-brand img {
  display: block;
  width: clamp(4.5rem, 14vw, 7.5rem);
  height: auto;
}
`

import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
<svg {...props} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ffffff"><path d="M312.31-160h335.38v-120q0-70.62-48.54-120.69-48.53-50.08-119.15-50.08t-119.15 50.08Q312.31-350.62 312.31-280v120ZM480-509.23q70.62 0 119.15-50.08 48.54-50.07 48.54-120.69v-120H312.31v120q0 70.62 48.54 120.69 48.53 50.08 119.15 50.08ZM200-120v-40h72.31v-120q0-74.08 45.42-131.42 45.42-57.35 116.42-68.58-71-12-116.42-68.96-45.42-56.96-45.42-131.04v-120H200v-40h560v40h-72.31v120q0 74.08-45.42 131.04Q596.85-492 525.85-480q71 11.23 116.42 68.58 45.42 57.34 45.42 131.42v120H760v40H200Z"/></svg>
)
export { SvgComponent as PendentSvg }

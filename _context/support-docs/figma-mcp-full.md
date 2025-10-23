# Figma MCP - Raw Output

**Node ID:** 303:5197  

---

## get_design_context

### Generated Code

```jsx
export default function Actions() {
  return (
    <div className="content-stretch flex gap-[22px] items-center justify-end relative size-full" data-name="Actions" data-node-id="303:5197">
      <div className="basis-0 bg-[var(--colors\/background\/brand\/primary,#ffcc00)] box-border content-stretch flex gap-[var(--spacing\/none,0px)] grow h-[36px] items-center justify-center min-h-px min-w-px overflow-clip px-[var(--spacing\/16,16px)] py-[var(--spacing\/8,8px)] relative rounded-[var(--corner-radius\/12,12px)] shrink-0" data-name="Buttons" data-node-id="303:5198">
        <p className="font-[var(--family\/roboto,'Roboto:Bold',_sans-serif)] font-bold leading-[20px] relative shrink-0 text-[var(--colors\/tipography\/neutral\/primary,#1c1c1c)] text-[var(--size\/14,14px)] text-nowrap whitespace-pre" data-node-id="I303:5198;19:103" style={{ fontVariationSettings: "'wdth' 100" }}>
          Adicionar
        </p>
      </div>
    </div>
  );
}
```

### Tool Messages

**Message 1:**
SUPER CRITICAL: The generated React+Tailwind code MUST be converted to match the target project's technology stack and styling system.
1. Analyze the target codebase to identify: technology stack, styling approach, component patterns, and design tokens
2. Convert React syntax to the target framework/library
3. Transform all Tailwind classes to the target styling system while preserving exact visual design
4. Follow the project's existing patterns and conventions
DO NOT install any Tailwind as a dependency unless the user instructs you to do so.

**Message 2:**
Node ids have been added to the code as data attributes, e.g. `data-node-id="1:2"`.

**Message 3:**
These styles are contained in the design: Label/Label Strong: Font(family: "Roboto", style: Bold, size: 14, weight: 700, lineHeight: 20).

**Message 4:**
Image assets are stored on a localhost server. Clients can use these images directly in code as a way to view the image assets the same way they would other remote servers. Images and SVGs will be stored as constants, e.g. const image = 'http://localhost:3845/assets/10c13ac1a228a365cb98a0064b1d5afbc84887b2.png' These constants will be used in the code as the source for the image, e.g. <img src={image} /> This is true for both images and SVGs, so you can use the same approach for both types of assets.

**Message 5:**
IMPORTANT: After you call this tool, you MUST call get_screenshot to get a screenshot of the node for context.

---

## get_variable_defs

```json
{
  "Colors/Tipography/Neutral/Primary": "#1c1c1c",
  "Label/Label Strong": "Font(family: \"Roboto\", style: Bold, size: 14, weight: 700, lineHeight: 20)"
}
```

---

## get_code_connect_map

```json
{}
```

---

## get_metadata

```xml
<frame id="303:5197" name="Actions" x="8" y="248" width="144" height="36">
  <instance id="303:5198" name="Buttons" x="0" y="0" width="144" height="36" />
</frame>
```

**Tool Message:**
IMPORTANT: After you call this tool, you MUST call get_design_context if trying to implement the design, since this tool only returns metadata. If you do not call get_design_context, the agent will not be able to implement the design.

---

## get_screenshot

![Screenshot of Actions button](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAAAXNSR0IArs4c6QAACb5JREFUeF7tnXl0FFUWh791pzshCQmERYIGJGERDIsoMjqCTGQwYRtFEBgRBdE5guLCODCocRyOCy4wTHCZQUEQBRVQURZxYRtARBAUAoSdhC1hS9JJp7snjmQyjOl6XdVdVe92/dv33rvfe11V71YB/IlGQBGBgCJt6rQhQAboETFBAGigCLNeIwPUHDRABMESBZoi0gAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZDRADJBEkKQYNchogBggiSBJMWqQ0QAxQBJBkmLUIKMBYoAkgiTFqEFGA8QASQRJilGDjAaIAZIIkhSjBhkNEAMkESQpRg0yGiAGSCJIUowaZBogWQRJ8dEApQEk0yRZdIgOA9QWQVJsNEBpAMk0SRYdosMAaYD+B+EAMzSYNpxFAAAAAElFTkSuQmCC)

**Tool Message:**
Image

---

## Extracted CSS Variables

From the generated code:

- `--colors/background/brand/primary`: `#ffcc00`
- `--spacing/none`: `0px`
- `--spacing/16`: `16px`
- `--spacing/8`: `8px`
- `--corner-radius/12`: `12px`
- `--family/roboto`: `'Roboto:Bold', sans-serif`
- `--colors/tipography/neutral/primary`: `#1c1c1c`
- `--size/14`: `14px`

## Typography

- Font family: Roboto
- Font style: Bold
- Font size: 14px
- Font weight: 700
- Line height: 20px

## Dimensions

- Frame width: 144px
- Frame height: 36px
- Position x: 8
- Position y: 248

## Structure

- Container: Actions (303:5197)
  - Child: Buttons instance (303:5198)
    - Child: Text label "Adicionar" (I303:5198;19:103)


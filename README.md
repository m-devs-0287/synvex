![Synvex Logo](https://raw.githubusercontent.com/m-devs-0287/synvex/refs/heads/main/assets/logo.png)
# Synvex

## Effortless Integration, Precision Design — Synvex brings icons to life with balance and simplicity.
**Synvex** is a customizable, fully accessible SVG icon library designed for seamless integration into HTML projects. Built with **industry-standard accessibility practices**, it ensures all icons are usable and readable for everyone. With flexible, **self-closing HTML tags** for each icon, Synvex makes it easy to build scalable, consistent, and accessible UIs that adapt to any project’s styling needs.

## Design Process
"Synvex’s icons are crafted with a meticulous blueprint that ensures **clarity, scalability, and flexibility** across all applications. Each icon is designed with consistent line weights, balanced proportions, and precise alignment for a clean, modern aesthetic. This blueprint approach makes the icons instantly recognizable and accessible, following industry standards for visual harmony and usability. With Synvex, every icon is not only visually appealing but also optimized for seamless integration into any UI, making your project’s interface both cohesive and professional."

## Features
- **Lightweight SVG Icons** – Optimized for performance.
- **Custom HTML Component** – Use with `<svx-icon name="iconName" />`.
- **Flexible Styling** – Adapts to text color using `currentColor`.

## Installation
To install **Synvex**, you can use npm:
```
npm install Synvex
or 
yarn add Synvex
```

## After Installation
After installation, you can import it directly in your HTML:
        
```
<!--import-->
<script type="module" src="node_modules/iconifyml/dist/iconifyml-icons.js"></script>
<!--use case-->
<svx-icon name="searchFilled"></svx-icon>
<svx-icon name="searchFilledBold"></svx-icon>
```

###Note:
When using self-closing tags keep in mind that it is recomended to keep elements isolated on their own container this will avoid any Shadow DOM Conflicts
```
<!--import-->
<script type="module" src="node_modules/Synvex/dist/Synvex-icons.js"></script>
<!--use-->
<span>
    <svx-icon name="searchOuline" />
</span>
```

## License
This library is licensed under the MIT License.

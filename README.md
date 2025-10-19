Create a a form components
    * Personal details
    * Education
    * Experiences
Create a component for the CV preview
    * A4 format
    * result of the form

In source, src
* components (folder)
    * containing the jsx elements
* containers (folder)
    * containing all the stateful logic

* For each components use style module
    * AttentionGrabber.module.css
    * import styles from './styles/Home.module.css'
    * <div className={styles.div}>

## TODO:
* improve aside form
    * present it with button to show form
* improve CV preview
    * only display all inputs at first then redirect with a button to the cv preview
    * this new page will show the cv properly, no form on the side, only cv and a button to save to pdf and print

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

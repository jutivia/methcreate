# Pages

Components for pages are to be as lean as possible with the bulk of the work done in utility functions and components. Any component that exports as a page should be in this format:

```
const PageName = () => {
    return (
        <div>
            <NiceSection />
            <UnniceSection />
            <VeryVeryNiceSection />
        </div>
    )
}

const <PageName>Page = {
    Component: PageName,
    route: '/the-route'
}

export default <PageName>Page;
```

# Imports

Imports in files are to be in the structure:

```
React specific imports
Third party library imports
Imports within the same module
Imports within the project from another module
```

## Extra notes on imports

- Imports should be sorted alphabetically. Editors like VSCode has the functionality to help you sort imports this way.

## Examples

From a `component.jsx` file:

```
import { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { OneStuff } from "../right-folder/right-file";
```

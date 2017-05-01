# Style Guide


## Naming Convention:

- #### Variables

    - camel case: ` myVarIsCool`
    - variables representing numbers end with Num: `myBigNum`
    - Boolean variables start with is: `isCorrect  isReady`
- #### Functions

    - end with Func: `myFunc grabWordFunc`
- #### CSS

    - no camel case, use dash between words: `.crazy-heading`

## Other

- #### Loops

    - place first curly brace on line with loop definition

        ```
        for (i=0; i < x; x++) {
            your statements here
        }
        ```
- #### Conditionals

    - place first curly brace after the if conditional line and indent statement within braces.
    - Place an else statement on same line as last brace.
    - Start else braces on a new line with an indent.
    - Indent statments within braces
    - Always use braces, even when you only have one statement.

        ```
        if (x > 0)
        {
            statements...
        } else
            {
                statements...
            }
         ````

- #### Objects

    - start curly braces after variable declaration, indent, and indent property declarations

    ```
    var myObject  =
        {
            property1 : "",
            property2 : "",
            property3 : "",
        }
    ```

- #### Arrays of Objects

  ```
  var objArray = 
        [{
              prop1 : "example",
              prop2 : "example"
        },{
              prop1 : "example",
              prop2 : "example"
        }];
  ```

- #### Comments
    - backend:
        - group function declarations and add large comment block above
        - group global variables and add large comment block above
        - group function calls and add large comment block above
        - comment before every function declaration
        - comment before every loop
        - comment before every event listener
        - comment before every object
     - frontend:
        - group style definitions by element, id, class
        - label each group with a comment
        - if you adjust a style to counteract odd UI behavior, add a comment so everyone knows what happened and how it was fixed.

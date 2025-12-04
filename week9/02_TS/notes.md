TypeScript code
   |
   v
lexer    [ It is used to tokenize any language, The code is scanned once and goes through tokens - finds very simple mistakes like semicolons, const, keyword spelling, etc. ]
   |
   v
Parser   [ creates a tree syntax - AST - the syntax tree goes in binder ]
   |
   v
Binder   [ binder has roles, 1. symbol tables, like writing colon then telling the datatime, 2. Parnet Pointer, pointer is just to maintain the track of whole tree - to travel through whole file, 3. Flow nodes, it's simply the if/else conditions who discusses the flow to break or run ahaead ]
   |
   v
Checker   [ checker goes through the whole code tiwce, checks the syntax, matches the datatype of all variables while defination and using ]
   |
   v
Emmiter   [ simply genertes the JS files of the TS code, removes the type declarations, removes the all types syntax and creates the strict JS code ]
   |
   v
.js / .d.ts / .map
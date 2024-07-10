"use client";

import { Refractor, registerLanguage } from "react-refractor";

import '../prism.css';
import '../prism-tomorrow.css';

// import languages
import js from "refractor/lang/javascript.js";
import ts from "refractor/lang/typescript.js";
import jsx from "refractor/lang/jsx.js";
import tsx from "refractor/lang/tsx.js";
import css from "refractor/lang/css.js";
import java from "refractor/lang/java.js";
import json from "refractor/lang/json.js";
import markdown from "refractor/lang/markdown.js";
import bash from "refractor/lang/bash.js";
import python from "refractor/lang/python.js";
import php from "refractor/lang/php.js";
import csharp from "refractor/lang/csharp.js";
import yaml from "refractor/lang/yaml.js";
import sql from "refractor/lang/sql.js";
import go from "refractor/lang/go.js";
import ruby from "refractor/lang/ruby.js";
import rust from "refractor/lang/rust.js";
import kotlin from "refractor/lang/kotlin.js";
import swift from "refractor/lang/swift.js";
import dart from "refractor/lang/dart.js";
import scala from "refractor/lang/scala.js";
import perl from "refractor/lang/perl.js";
import r from "refractor/lang/r.js";
import lua from "refractor/lang/lua.js";
import groovy from "refractor/lang/groovy.js";
import powershell from "refractor/lang/powershell.js";
import objectivec from "refractor/lang/objectivec.js";
import elixir from "refractor/lang/elixir.js";
import clojure from "refractor/lang/clojure.js";
import fsharp from "refractor/lang/fsharp.js";
import reason from "refractor/lang/reason.js";
import ocaml from "refractor/lang/ocaml.js";
import erlang from "refractor/lang/erlang.js";
import haskell from "refractor/lang/haskell.js";
import scheme from "refractor/lang/scheme.js";
import lisp from "refractor/lang/lisp.js";
import racket from "refractor/lang/racket.js";
import julia from "refractor/lang/julia.js";
import nim from "refractor/lang/nim.js";
import crystal from "refractor/lang/crystal.js";
import cpp from "refractor/lang/cpp.js";
import c from "refractor/lang/c.js";

// register all languages
registerLanguage(js);
registerLanguage(ts);
registerLanguage(jsx);
registerLanguage(tsx);
registerLanguage(css);
registerLanguage(java);
registerLanguage(json);
registerLanguage(markdown);
registerLanguage(bash);
registerLanguage(python);
registerLanguage(php);
registerLanguage(csharp);
registerLanguage(yaml);
registerLanguage(sql);
registerLanguage(go);
registerLanguage(ruby);
registerLanguage(rust);
registerLanguage(kotlin);
registerLanguage(swift);
registerLanguage(dart);
registerLanguage(scala);
registerLanguage(perl);
registerLanguage(r);
registerLanguage(lua);
registerLanguage(groovy);
registerLanguage(powershell);
registerLanguage(objectivec);
registerLanguage(elixir);
registerLanguage(clojure);
registerLanguage(fsharp);
registerLanguage(reason);
registerLanguage(ocaml);
registerLanguage(erlang);
registerLanguage(haskell);
registerLanguage(scheme);
registerLanguage(lisp);
registerLanguage(racket);
registerLanguage(julia);
registerLanguage(nim);
registerLanguage(crystal);
registerLanguage(cpp);
registerLanguage(c);

export default function Code({children, language}: { children: string, language: string }) {
    return (
        <Refractor language={language} value={children}/>
    );
}
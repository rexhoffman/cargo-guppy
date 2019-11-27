initSidebarItems({"macro":[["call_site_error","Shortcut for `span_error!(Span::call_site(), msg...)`. This macro is still preferable over plain panic, see Motivation"],["filter_macro_errors","This macro is supposed to be used at the top level of your `proc-macro`, the function marked with a `#[proc_macro*]` attribute. It catches all the errors triggered by [`span_error!`], [`call_site_error!`], [`MacroError::trigger`] and [`MultiMacroErrors`]. Once caught, it converts it to a [`proc_macro::TokenStream`] containing a [`compile_error!`][compl_err] invocation."],["span_error","Makes a [`MacroError`] instance from provided arguments (`panic!`-like) and triggers panic in hope it will be caught by [`filter_macro_errors!`]."]],"mod":[["dummy","`compile_error!` does not interrupt compilation right away. This means `rustc` doesn't just show you the error and abort, it carries on the compilation process, looking for other errors to report."],["single","This module contains data types and functions to be used for single-error reporting."]],"struct":[["MultiMacroErrors","This type represents a container for multiple errors. Each error has it's own span location."]],"trait":[["OptionExt","This traits expands [`Option<T>`][std::option::Option] with some handy shortcuts."],["ResultExt","This traits expands `Result<T, Into<MacroError>>` with some handy shortcuts."]]});
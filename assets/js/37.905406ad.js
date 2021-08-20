(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{402:function(t,s,a){"use strict";a.r(s);var e=a(26),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"module-translations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-translations"}},[t._v("#")]),t._v(" Module Translations")]),t._v(" "),a("p",[t._v("While developing a module, You write your strings in the English language. But you are not creating your modules for the English language audience only.")]),t._v(" "),a("p",[t._v("You must want your module is for every language (French, Dutch, Spanish, etc) the website provides for its employees and customers. So you have to translate them into every language available on your website.")]),t._v(" "),a("p",[t._v("If you do this task manually it is very tedious. But QloApps provides an easy way to make your strings of the module translatable in every language.")]),t._v(" "),a("p",[t._v("Your translatable strings may reside in two types of files in the QloApps module -")]),t._v(" "),a("ul",[a("li",[t._v("PHP files")]),t._v(" "),a("li",[t._v("Smarty files (.tpl)")])]),t._v(" "),a("h3",{attrs:{id:"php-files-translations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-files-translations"}},[t._v("#")]),t._v(" PHP files translations")]),t._v(" "),a("p",[t._v("In PHP files, use "),a("strong",[t._v("$this->l('My Module String.')")]),t._v(" method call.\nThis method is in the "),a("strong",[t._v("Module")]),t._v(" abstract class and available in all the modules of QloApps.")]),t._v(" "),a("p",[t._v("Below is the example of the module's main file myqlomodule.php")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("displayName")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'My QloApps Module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("description")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Write a description of the module.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Mostly in all cases in php files you have to use "),a("strong",[t._v("$this->l()")]),t._v(" method.")]),t._v(" "),a("p",[t._v("But in some special cases this method will not work::")]),t._v(" "),a("p",[a("ins",[a("strong",[t._v("CASE - 1")])]),t._v(" : In the "),a("strong",[t._v("Front controller")]),t._v(" of the module you have to use "),a("strong",[t._v("$this->module->l()")]),t._v(" for string translations.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'My QloApps String to translate in front controller.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'front_controller_file_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Let us understand it with an example.\nBelow we are translating string in the /cheque/controllers/front/validation.php file")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("die")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This payment method is not available.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'validation'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[a("ins",[a("strong",[t._v("CASE - 2")])]),t._v(": In the "),a("strong",[t._v("Classes")]),t._v(" of the module you have to first create the module's object and then call the "),a("strong",[t._v("l()")]),t._v(" method with the module's object.")]),t._v(" "),a("p",[t._v("If there is a class names "),a("strong",[t._v("ModuleHelper")]),t._v(" in the file "),a("strong",[t._v("myqlomodule/classes/ModuleHelper.php")]),t._v(". Then we have to make string translatable in this class like below -")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MyQloModule")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$objModule")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("l")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'My QloApps String to translate in module classes.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'ModuleHelper'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ModuleHelper is file name of the class")]),t._v("\n")])])]),a("h3",{attrs:{id:"smarty-files-tpl-translations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#smarty-files-tpl-translations"}},[t._v("#")]),t._v(" Smarty files (.tpl) Translations")]),t._v(" "),a("p",[t._v("In the .tpl files, use "),a("strong",[t._v("{l s='My string' mod='modulename'}")]),t._v(" function call which is replaced by smarty by the translation of the chosen language.")]),t._v(" "),a("p",[t._v("For example, If we have to make below line's strings translatable -")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$moduleControllerLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Click Here"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("Click here to visit the link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Below is the translatable string code -")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("a href"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$moduleControllerLink")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('"')]),t._v(" title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v("\"{l s='Click Here' mod='myqlomodule'}\"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("l s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Click here to visit the link'")]),t._v(" mod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'myqlomodule'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),a("p",[t._v("Sometimes there are complex codes to translate -")]),t._v(" "),a("p",[t._v("Lets take a look at the below code -")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("This is\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    Qlo Module\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In the above code "),a("strong",[t._v('"This is Qlo Module"')]),t._v(" string is translatable.\nIn the first method, you can make strings "),a("strong",[t._v('"This is"')]),t._v(" and "),a("strong",[t._v('"Qlo Module"')]),t._v(" translatable separately.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("l s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'This is'")]),t._v(" mod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'myqlomodule'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("l s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Qlo Module'")]),t._v(" mod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'myqlomodule'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("In the second method, sprintf() markers can mark the variables as %s or %2$s."),a("br"),t._v("\nIn the above example, %s must be replaced by the "),a("strong",[t._v("Qlo module")]),t._v(" if and only if variable "),a("strong",[t._v("$module_name_var")]),t._v(" is not there.\nAnd we have to keep in our mind to make "),a("strong",[t._v('"Qlo Module"')]),t._v(" string translatable.")]),t._v(" "),a("p",[t._v("This can be achieved through the below code -")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("{capture}")]),t._v(" function in Smarty only collects the template output into a variable between the tags to use later on. It does not display it.")]),t._v(" "),a("li",[t._v("translated "),a("strong",[t._v('"Qlo Module"')]),t._v(" is Replaced with the variable if the "),a("strong",[t._v("$module_name_var")]),t._v(" is empty or absent, using a temporary variable ("),a("strong",[t._v("$temp_mod_name")]),t._v(").")])]),t._v(" "),a("p",[t._v("See the below code -")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("isset")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("capture name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'temp_mod_name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("l s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Qlo Module'")]),t._v(" mod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'myqlomodule'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("capture"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("assign "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'module_name_var'")]),t._v(" value"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$smarty")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("capture"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v("temp_mod_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("l s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Hello %s'")]),t._v(" sprintf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$module_name_var")]),t._v(" mod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'myqlomodule'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[a("p",[a("strong",[t._v("mod")]),t._v(" parameter is mandatory in module translations."),a("br"),t._v("\nQloApps translation system use it to know which translations belongs to which module.\\")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("single quotes")]),t._v(" delimiter is used to delimit Translation Strings. If you want to use single quotes in a string then it should be escaped with a backslash (\\).")])])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("l s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Learn to write \\'Hello World\\'.'")]),t._v(" mod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'myqlomodule'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("So this is how strings in the template files are translated.")]),t._v(" "),a("h3",{attrs:{id:"translate-the-strings-in-qloapps"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#translate-the-strings-in-qloapps"}},[t._v("#")]),t._v(" Translate the strings in QloApps")]),t._v(" "),a("p",[t._v("Below are steps to translate strings in QloApps :")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Visit "),a("strong",[t._v("Localization -> Translations")]),t._v(" tab.")])]),t._v(" "),a("li",[a("p",[t._v("Select "),a("strong",[t._v("Installed modules translations")]),t._v(" from the "),a("strong",[t._v("Modify translations")]),t._v(" drop-down.")])]),t._v(" "),a("li",[a("p",[t._v("Select the language in which you want to translate the module.")])]),t._v(" "),a("li",[a("p",[t._v("Click the "),a("strong",[t._v("Modify")]),t._v(" button to proceed.")])]),t._v(" "),a("li",[a("p",[t._v("Now in the loaded page all the strings from all the installed modules in QloApps will be displayed.\nThe fieldsets of the module will be closed which all the strings are already translated. Otherwise, if at least one string is left for translations module's fieldset is expanded.")])]),t._v(" "),a("li",[a("p",[t._v("Next step is to find your module in the list to translate and fill the translations in the text fields.")])]),t._v(" "),a("li",[a("p",[t._v("After filling in all the translations, click on the "),a("strong",[t._v("Save and Stay")]),t._v(" or "),a("strong",[t._v("Save")]),t._v(" button. this way your translations will be saved.")])]),t._v(" "),a("li",[a("p",[t._v("Module's translations are saved in a file named using the languageCode.php format i.e. "),a("strong",[t._v("/myqlomodule/traslations/fr.php")]),t._v(".\nBelow is the demo file how translation files actually look like -")])])]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token php language-php"}},[a("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("global")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_MODULE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("array")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<{myqlomodule}QloApps>myqlomodule_2ddddc2a736e4128ce1cdfd22b041e7f'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Mon module'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<{myqlomodule}QloApps>myqlomodule_d6968577f69f08c93c209bd8b6b3d4d5'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Description du module Qlo.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<{myqlomodule}QloApps>myqlomodule_533937acf0e84c92e787614bbb16a7a0'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Êtes-vous certain de vouloir désinstaller ce module ? Vous perdrez tous vos réglages !'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<{myqlomodule}QloApps>myqlomodule_0f40e8817b005044250943f57a21c5e7'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Aucun nom fourni'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<{myqlomodule}QloApps>myqlomodule_fe5d926454b6a8144efce13a44d019ba'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Valeur de configuration non valide.'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$_MODULE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'<{myqlomodule}QloApps>myqlomodule_c888438d14855d7d96a2724ee9c306bd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Réglages mis à jour'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])]),a("p",[a("strong",[t._v("Note")]),t._v(" : "),a("em",[t._v("The translation files created in the translations/ folder of the module must not be edited manually. You have to use the QloApps translations page to translate the strings of the module again.")])]),t._v(" "),a("p",[t._v("When you have translated the module's string in the french language (or any other language) then selecting that language in the front office or back office of the website the translated content in the french language (or any other language) will be shown.")])])}),[],!1,null,null,null);s.default=n.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{390:function(t,e,a){"use strict";a.r(e);var o=a(26),r=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks"}},[t._v("#")]),t._v(" Hooks")]),t._v(" "),a("p",[t._v("In QloApps,hooks are associate your content and actions to some specific QloApps events. Hooks can be used to display content in front office or to trigger a custom function when a customer sign up")]),t._v(" "),a("h2",{attrs:{id:"managing-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#managing-hooks"}},[t._v("#")]),t._v(" Managing Hooks")]),t._v(" "),a("p",[t._v("There are two types of hooks in QloApps")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("Display hooks")]),t._v(" : These hooks are responsible to display something whether on the front-end or backend.")]),t._v(" "),a("li",[a("strong",[t._v("Action hooks")]),t._v(" : Any specific events or data operations that take place in QloApps will trigger this hook type of hook.")])]),t._v(" "),a("p",[a("strong",[t._v("Display Hooks")]),t._v(" are used to insert content in a page.")]),t._v(" "),a("p",[t._v("Below are some hooks which can add content on the home page.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Hook")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("displayHeader")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Displays the content in the page's header.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("displayTop")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Displays the content in the page's top.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("displayLeftColumn")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Displays the content in the page's left column.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("displayHome")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Displays the content in the page's central.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("displayRightColumn")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Displays the content in the page's right column.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("displayFooter")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Displays the content in the page's footer.")])])])]),t._v(" "),a("p",[a("strong",[t._v("Action Hooks")]),t._v(" are used to execute some actions before/after any QloApps event.")]),t._v(" "),a("p",[t._v("Below are some hooks which can get and updated data in QloApps.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[t._v("Hook")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("actionValidateOrder")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Event called when order is validated and ordered.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("actionCartSummary")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Event called when QloApps request cart summary.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("actionCustomerLogoutBefore")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Event called before customer logout is processed.")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[t._v("actionProductSave")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Event called after a room type is save.")])])])]),t._v(" "),a("h3",{attrs:{id:"executing-a-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executing-a-hook"}},[t._v("#")]),t._v(" Executing a Hook")]),t._v(" "),a("p",[t._v("You can manually call any hook in QloApps.")]),t._v(" "),a("h4",{attrs:{id:"how-to-call-hooks-in-a-controller"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-call-hooks-in-a-controller"}},[t._v("#")]),t._v(" How to call Hooks in a controller?")]),t._v(" "),a("p",[t._v("To call a hook in a controller, Call the "),a("code",[t._v("hookExec()")]),t._v(" method with the name of the hook.\n"),a("code",[t._v("Module::hookExec('Hook_Name');")])]),t._v(" "),a("p",[t._v("See the below example:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name static-context"}},[t._v("Hook")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("exec")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'displayTop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h4",{attrs:{id:"how-to-call-hooks-in-a-theme"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-call-hooks-in-a-theme"}},[t._v("#")]),t._v(" How to call Hooks in a theme?")]),t._v(" "),a("p",[t._v("In a template file(.tpl), write the name of the hook with the hook function. You can also add the module's name that you want the hook executes.")]),t._v(" "),a("p",[t._v("See the below example:")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hook h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'displayRightColumn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("For a Specific module")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("hook h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'displayRightColumn'")]),t._v(" mod"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'moduleName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"using-a-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-hook"}},[t._v("#")]),t._v(" Using a hook")]),t._v(" "),a("h4",{attrs:{id:"how-to-use-hooks-in-a-module"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-hooks-in-a-module"}},[t._v("#")]),t._v(" How to use Hooks in a module?")]),t._v(" "),a("p",[t._v("Now when these hooks are executed we would want to perform our operations through a module.")]),t._v(" "),a("p",[t._v("The hook must be registered using the "),a("code",[t._v("registerHook()")]),t._v(" method for a module to respond. Registration is done usually during the installation of a module.")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword static-context"}},[t._v("parent")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("::")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'displayHeader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v('Create a non-static public method which name starts with "hook" keyword.')]),t._v(" "),a("p",[t._v('To add your code to a hook, you must create a non-static public method, starting with the "hook" keyword followed by the name of the hook to use. Only one argument (array of contextual information) is received by this method.')]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hookDisplayHeader")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$params")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// write your code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"how-to-create-your-own-hook"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-your-own-hook"}},[t._v("#")]),t._v(" How to create your own hook?")]),t._v(" "),a("p",[t._v("To add a new QloApps hook, add a new record in the "),a("strong",[t._v("ps_hook")]),t._v(" table in the database.")]),t._v(" "),a("p",[t._v("You can do it by below query -")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INSERT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("INTO")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`ps_hook`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`name`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`title`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string backtick-quoted-string"}},[t._v("`description`")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("VALUES ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'Hook_Name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your hook name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'your hook description'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("But and easy method is provided by the QloApps -")]),t._v(" "),a("div",{staticClass:"language-php extra-class"},[a("pre",{pre:!0,attrs:{class:"language-php"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$this")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerHook")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'HookName'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("If the hook name does not exist in the system the QloApps will create a new hook.")]),t._v(" "),a("p",[t._v("Now you will need to execute this hook at your desired time and other modules and register this hook and perform operation during your code execution.")]),t._v(" "),a("h2",{attrs:{id:"hooks-lists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hooks-lists"}},[t._v("#")]),t._v(" Hooks Lists")]),t._v(" "),a("p",[t._v("We have two naming schemes in QloApps hooks")]),t._v(" "),a("ul",[a("li",[t._v("action hooks: Any specific events or data operations that take place in QloApps will trigger this hook type of hook.")]),t._v(" "),a("li",[t._v("display hooks: These hooks are responsible to display something whether on the front-end or backend.")])]),t._v(" "),a("h3",{attrs:{id:"front-office-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#front-office-hooks"}},[t._v("#")]),t._v(" Front-office hooks")]),t._v(" "),a("h4",{attrs:{id:"home-page-and-general-site-pages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#home-page-and-general-site-pages"}},[t._v("#")]),t._v(" Home page and general site pages")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("displayTop")]),t._v(" "),a("td",[t._v("Call this hook in the page's header")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayRightColumn")]),t._v(" "),a("td",[t._v("Call this hook when loading the right column.")]),t._v(" "),a("td",[a("code",[t._v("array( cart' => (object) Cart object);")]),t._v(" "),a("br"),t._v("Note that the Cart object can also be retrieved from the current Context.")])]),t._v(" "),a("tr",[a("td",[t._v("displayLeftColumn")]),t._v(" "),a("td",[t._v("Call this hook when loading the left column.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayHome")]),t._v(" "),a("td",[t._v("Call this hook at the center of the homepage.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayHeader")]),t._v(" "),a("td",[t._v("Call this hook within the HTML "),a("code",[t._v("<head>")]),t._v(" tags. Ideal location for adding JavaScript and CSS files.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayFooter")]),t._v(" "),a("td",[t._v("Call this hook in the page's footer.")]),t._v(" "),a("td",[t._v("N/A")])])])]),t._v(" "),a("h4",{attrs:{id:"product-page-or-room-type-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#product-page-or-room-type-page"}},[t._v("#")]),t._v(" Product page Or Room type page")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("displayLeftColumnProduct")]),t._v(" "),a("td",[t._v('Call this hook right before the "Print" link, under the picture.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayRightColumnProduct")]),t._v(" "),a("td",[t._v('Call this hook right after the block for the "Add to Cart" button.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayProductButtons")]),t._v(" "),a("td",[t._v('Call this hook inside the block for the "Add to Cart" button, right after that button.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("actionProductOutOfStock")]),t._v(" "),a("td",[t._v('Call this hook inside the block for the "Add to Cart" button, right after the "Availability" information.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayFooterProduct")]),t._v(" "),a("td",[t._v("Call this hook right before the tabs.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayProductTab")]),t._v(" "),a("td",[t._v('Call this hook in tabs list, such as "More info", "Data sheet", "Accessories", etc.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayProductTabContent")]),t._v(" "),a("td",[t._v("Call this hook when a tab is clicked.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'product' => (object) Product object")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])])])]),t._v(" "),a("h4",{attrs:{id:"cart-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cart-page"}},[t._v("#")]),t._v(" Cart page")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("actionCartSave")]),t._v(" "),a("td",[t._v("Call this hook right after a cart creation or update.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayShoppingCartFooter")]),t._v(" "),a("td",[t._v("Called right below the cart items table.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'delivery' => $delivery,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'delivery_state' => State::getNameById($delivery->id_state),")]),a("br"),t._v(" "),a("code",[t._v("'invoice' => $invoice,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'invoice_state' => State::getNameById($invoice->id_state),")]),t._v(" "),a("br"),a("code",[t._v("'formattedAddresses' => $formatted_addresses,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'products' => array_values($products),")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'gift_products' => $gift_products,")]),t._v(" "),a("br"),a("code",[t._v("'discounts' => $cart_rules,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'is_virtual_cart' => (int)$this->isVirtualCart(),")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'total_discounts' => $total_discounts,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'total_discounts_tax_exc' => $total_discounts_tax_exc,")]),a("br"),t._v(" "),a("code",[t._v("'total_wrapping' => $this->getOrderTotal(true, Cart::ONLY_WRAPPING),")]),a("br"),t._v(" "),a("code",[t._v("'total_wrapping_tax_exc' => $this->getOrderTotal(false, Cart::ONLY_WRAPPING),")]),a("br"),t._v(" "),a("code",[t._v("'total_shipping' => $total_shipping,")]),a("br"),a("code",[t._v("'total_shipping_tax_exc' => $total_shipping_tax_exc,")]),a("br"),t._v(" "),a("code",[t._v("'total_products_wt' => $total_products_wt,")]),a("br"),a("code",[t._v("'total_products' => $total_products,")]),a("br"),t._v(" "),a("code",[t._v("'total_price' => $base_total_tax_inc,")]),a("br"),t._v(" "),a("code",[t._v("'total_tax' => $total_tax,")]),a("br"),a("code",[t._v("'total_price_without_tax' => $base_total_tax_exc,")]),a("br"),t._v(" "),a("code",[t._v("'is_multi_address_delivery' => $this->isMultiAddressDelivery() || ((int)Tools::getValue('multi-shipping') == 1),")]),a("br"),a("code",[t._v("'free_ship' => $total_shipping ? 0 : 1,")]),a("br"),a("code",[t._v("'carrier' => new Carrier($this->id_carrier, $id_lang),")]),a("br"),t._v("); "),a("br"),t._v("Can be found in /classes/Cart.php")])]),t._v(" "),a("tr",[a("td",[t._v("displayShoppingCart")]),t._v(" "),a("td",[t._v("Called after the cart's table of items, right above the navigation buttons.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),a("br"),t._v(" "),a("code",[t._v("'delivery' => $delivery,")]),a("br"),t._v(" "),a("code",[t._v("'delivery_state' => State::getNameById($delivery->id_state),")]),a("br"),t._v(" "),a("code",[t._v("'invoice' > $invoice,")]),a("br"),t._v(" "),a("code",[t._v("'invoice_state' => State::getNameById($invoice->id_state),")]),a("br"),t._v(" "),a("code",[t._v("'formattedAddresses' => formatted_addresses,")]),a("br"),t._v(" "),a("code",[t._v("'products' => array_values($products),")]),a("br"),t._v(" "),a("code",[t._v("'gift_products' => $gift_products,")]),a("br"),t._v(" "),a("code",[t._v("'discounts' => $cart_rules,")]),a("br"),t._v(" "),a("code",[t._v("'is_virtual_cart' => (int)$this->isVirtualCart(),")]),a("br"),t._v(" "),a("code",[t._v("'total_discounts' => $total_discounts,")]),a("br"),t._v(" "),a("code",[t._v("'total_discounts_tax_exc' => $total_discounts_tax_exc,")]),a("br"),t._v(" "),a("code",[t._v("'total_wrapping' => $this->getOrderTotal(true, Cart::ONLY_WRAPPING),")]),a("br"),t._v(" "),a("code",[t._v("'total_wrapping_tax_exc' => $this->getOrderTotal(false, Cart::ONLY_WRAPPING),")]),a("br"),t._v(" "),a("code",[t._v("'total_shipping' => $total_shipping,")]),a("br"),t._v(" "),a("code",[t._v("'total_shipping_tax_exc' => $total_shipping_tax_exc,")]),a("br"),t._v(" "),a("code",[t._v("'total_products_wt' => $total_products_wt,")]),a("br"),t._v(" "),a("code",[t._v("'total_products' => $total_products,")]),a("br"),t._v(" "),a("code",[t._v("'total_price' => $base_total_tax_inc,")]),a("br"),t._v(" "),a("code",[t._v("'total_tax' => $total_tax,")]),a("br"),t._v(" "),a("code",[t._v("'total_price_without_tax' => $base_total_tax_exc,")]),a("br"),t._v(" "),a("code",[t._v("'is_multi_address_delivery' => $this->isMultiAddressDelivery() || ((int)Tools::getValue('multi-shipping') == 1),")]),a("br"),t._v(" "),a("code",[t._v("'free_ship' => $total_shipping ? 0 : 1,")]),a("br"),t._v(" "),a("code",[t._v("'carrier' => new Carrier($this->id_carrier, $id_lang),")]),a("br"),t._v("); "),a("br"),t._v(" Can be found in /classes/Cart.php")])]),t._v(" "),a("tr",[a("td",[t._v("displayCustomerAccountFormTop")]),t._v(" "),a("td",[t._v('Called within the client account creation form, right above the "Your personal information" block.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayCustomerAccountForm")]),t._v(" "),a("td",[t._v('Called within the client account creation form, right before the "Register" button.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("actionCustomerAccountAdd")]),t._v(" "),a("td",[t._v("Called right after the client account creation.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayCustomerAccount")]),t._v(" "),a("td",[t._v("Called on the client account homepage, after the list of available links. Ideal location to add a link to this list.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayMyAccountBlock")]),t._v(" "),a("td",[t._v('Called within the "My account" block, in the left column, below the list of available links. This is the ideal location to add a link to this list.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayMyAccountBlockfooter")]),t._v(" "),a("td",[t._v('Displays extra information inside the "My account" block.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("actionAuthentication")]),t._v(" "),a("td",[t._v("Called right after the client identification, only if the authentication is valid (e-mail address and password are both OK).")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("actionBeforeAuthentication")]),t._v(" "),a("td",[t._v("Called right before authentication.")]),t._v(" "),a("td",[t._v("N/A")])])])]),t._v(" "),a("h4",{attrs:{id:"search-page"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-page"}},[t._v("#")]),t._v(" Search page")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("actionSearch")]),t._v(" "),a("td",[t._v("Call after a search is performed. Ideal location to parse and/or handle the search query and results.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'expr' => (string) Search query,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'total' => (int) Amount of search results")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])])])]),t._v(" "),a("h4",{attrs:{id:"mobile-theme-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mobile-theme-hooks"}},[t._v("#")]),t._v(" Mobile theme hooks")]),t._v(" "),a("p",[t._v("The hooks discussed in this section are specific to QloApps default mobile theme.")]),t._v(" "),a("p",[t._v("The first four hooks in the list are in QloApps' internal hooks database, so the user can attach an action/interface to these hooks using the Modules > Positions page.\nAll the other hooks  do not exist in the internal hooks database  but are there in the mobile theme TPL files. Although the developer can still use them to attach content to a specific part of the code.")]),t._v(" "),a("p",[t._v("Here is the list")]),t._v(" "),a("ul",[a("li",[t._v("displayMobileTopSiteMap")]),t._v(" "),a("li",[t._v("displayMobileHeader")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartTop")]),t._v(" "),a("li",[t._v("displayMobileAddToCartTop")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartTop")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartBottom")]),t._v(" "),a("li",[t._v("displayMobileTopSiteMap")]),t._v(" "),a("li",[t._v("displayMobileFooterChoice")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartTop")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartBottom")]),t._v(" "),a("li",[t._v("displayMobileIndex")]),t._v(" "),a("li",[t._v("mobileCustomerAccount")]),t._v(" "),a("li",[t._v("displayMobileTop")]),t._v(" "),a("li",[t._v("displayMobileAddToCartTop")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartTop")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartButton")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartBottom")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartTop")]),t._v(" "),a("li",[t._v("displayMobileShoppingCartBottom")])]),t._v(" "),a("h3",{attrs:{id:"back-office-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#back-office-hooks"}},[t._v("#")]),t._v(" Back office hooks")]),t._v(" "),a("h4",{attrs:{id:"general-hooks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general-hooks"}},[t._v("#")]),t._v(" General Hooks")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("displayBackOfficeFooter")]),t._v(" "),a("td",[t._v('Call this hook within the page footer, above the "Power By Webkul" line.')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayBackOfficeHeader")]),t._v(" "),a("td",[t._v("Call this hook between the HEAD tags. This is the ideal location for adding JavaScript and CSS files.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayBackOfficeHome")]),t._v(" "),a("td",[t._v("Call this hook at the center of the homepage.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayBackOfficeTop")]),t._v(" "),a("td",[t._v("Call this hook within the header, above the tabs.")]),t._v(" "),a("td",[t._v("N/A")])])])]),t._v(" "),a("h4",{attrs:{id:"orders-and-order-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#orders-and-order-details"}},[t._v("#")]),t._v(" Orders and order details")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("actionValidateOrder")]),t._v(" "),a("td",[t._v("Called during the new order creation process, right after it has been created.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'cart' => (object) Cart object,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'order' => (object) Order object,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'customer' => (object) Customer object,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'currency' => (object) Currency object,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'orderStatus' => (object) OrderState object")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionPaymentConfirmation")]),t._v(" "),a("td",[t._v('Called when an order\'s status becomes "Payment accepted".')]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_order' => (int) Order ID")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionOrderStatusUpdate")]),t._v(" "),a("td",[t._v("Called when an order's status is changed, right before it is actually changed.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'newOrderStatus' => (object) OrderState object,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_order' => (int) Order ID")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionOrderStatusPostUpdate")]),t._v(" "),a("td",[t._v("Called when an order's status is changed, right after it is actually changed.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'newOrderStatus' => (object) OrderState object,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_order' => (int) Order ID")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionProductCancel")]),t._v(" "),a("td",[t._v("Called when an item is deleted from an order, right after the deletion.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'order' => (object) Order object,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_order_detail' => (int) Order Detail ID")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("displayInvoice")]),t._v(" "),a("td",[t._v("Called when the order's details are displayed, above the Client Information block.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayAdminOrder")]),t._v(" "),a("td",[t._v("Called when the order's details are displayed, below the Client Information block.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_order' = (int) Order ID")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionOrderSlipAdd")]),t._v(" "),a("td",[t._v("Called during the creation of a credit note, right after it has been created.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'order' => Order oject,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'productList' => array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("(int) product ID 1,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("(int) product ID 2,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("...,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("(int) product ID n")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("),")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'qtyList' => array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("(int) quantity 1,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("(int) quantity 2,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("...,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("(int) quantity n")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(")")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")]),t._v(" "),a("br"),t._v(" The order of IDs and quantities is important!")])])])]),t._v(" "),a("h4",{attrs:{id:"products"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#products"}},[t._v("#")]),t._v(" Products")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("actionProductSave")]),t._v(" "),a("td",[t._v("Called when saving products.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_product' => (int) Product ID")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionUpdateQuantity")]),t._v(" "),a("td",[t._v('Called during the validation of an order, the status of which being something other than "canceled" or "Payment error", for each of the order\'s items.')]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_product' => (int) Product ID,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_product_attribute' => (int) Product attribute ID,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'quantity' => (int) New product quantity")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionProductAttributeUpdate")]),t._v(" "),a("td",[t._v("When product declination is updated, right after said update the hook is called.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_product_attribute' => (int) Product attribute ID")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionProductAttributeDelete")]),t._v(" "),a("td",[t._v("Called when a product declination is deleted.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'product' => (object)")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("Product object")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("actionWatermark")]),t._v(" "),a("td",[t._v("Called when an image is added to a product, right after said addition.")]),t._v(" "),a("td",[a("code",[t._v("array(")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_image' =>")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("(int) Image ID,")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v("'id_product' => (int) Product ID")]),t._v(" "),a("br"),t._v(" "),a("code",[t._v(");")])])]),t._v(" "),a("tr",[a("td",[t._v("displayAttributeForm")]),t._v(" "),a("td",[t._v('Add fields to the form "attribute value".')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayAttributeGroupForm")]),t._v(" "),a("td",[t._v('Add fields to the form "attribute group".')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayAttributeGroupPostProcess")]),t._v(" "),a("td",[t._v("Called when post-process in admin attribute group.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayFeatureForm")]),t._v(" "),a("td",[t._v('Add fields to the form "feature".')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayFeaturePostProcess")]),t._v(" "),a("td",[t._v("Called when post-process in admin feature.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayFeatureValueForm")]),t._v(" "),a("td",[t._v('Add fields to the form "feature value".')]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayFeatureValuePostProcess")]),t._v(" "),a("td",[t._v("Called when post-process in admin feature value.")]),t._v(" "),a("td",[t._v("N/A")])])])]),t._v(" "),a("h4",{attrs:{id:"statistics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#statistics"}},[t._v("#")]),t._v(" Statistics")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("displayAdminStatsGraphEngine")]),t._v(" "),a("td",[t._v("Called when a stats graph is displayed.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayAdminStatsGridEngine")]),t._v(" "),a("td",[t._v("Called when the grid of stats is displayed.")]),t._v(" "),a("td",[t._v("N/A")])]),t._v(" "),a("tr",[a("td",[t._v("displayAdminStatsModules")]),t._v(" "),a("td",[t._v("Called when the list of stats modules is displayed.")]),t._v(" "),a("td",[t._v("N/A")])])])]),t._v(" "),a("h4",{attrs:{id:"clients"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clients"}},[t._v("#")]),t._v(" Clients")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Hook Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Anticipation in $param (Psuedocode)")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("displayAdminCustomers")]),t._v(" "),a("td",[t._v("Called when a client's details are displayed, right after the list of the clients groups the current client belongs to.")]),t._v(" "),a("td",[t._v("N/A")])])])])])}),[],!1,null,null,null);e.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),l=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=l.a.createContext({}),p=function(e){var t=l.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=p(e.components);return l.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},s=l.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(i,".").concat(s)]||d[s]||u[s]||r;return n?l.a.createElement(m,b(b({ref:t},c),{},{components:n})):l.a.createElement(m,b({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var c=2;c<r;c++)i[c]=n[c];return l.a.createElement.apply(null,i)}return l.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),l=n(7),r=(n(0),n(106)),i={id:"configuration",title:"Application Configuration"},b={unversionedId:"install/configuration",id:"install/configuration",isDocsHomePage:!1,title:"Application Configuration",description:"Overview",source:"@site/docs/install/configuration.md",slug:"/install/configuration",permalink:"/docs/install/configuration",version:"current",sidebar:"someSidebar",previous:{title:"Synology",permalink:"/docs/install/synology"},next:{title:"Setup Grafana",permalink:"/docs/install/grafana"}},o=[{value:"Overview",id:"overview",children:[]},{value:"Poller",id:"poller",children:[]},{value:"UniFi Controller",id:"unifi-controller",children:[{value:"Multiple Controllers",id:"multiple-controllers",children:[]}]},{value:"Output Plugins",id:"output-plugins",children:[{value:"Prometheus",id:"prometheus",children:[]},{value:"InfluxDB",id:"influxdb",children:[]}]}],c={toc:o};function p(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"This page describes the two methods for configuring UnPoller.\nIt also describes most of the common configuration values and the\nenvironment variable alternative."),Object(r.b)("p",null,"UnPoller can be configured for use in two ways:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Using environment variables (often used in Docker)."),Object(r.b)("li",{parentName:"ul"},"With a configuration file."),Object(r.b)("li",{parentName:"ul"},"Both may be used simultaneously; env variables win in case of duplicate settings.")),Object(r.b)("p",null,"Which to use is a matter of personal choice. Environment variables have the advantage\nthat all settings (referring to Docker) are in one place. The config file method has\nthe advantage that UnPoller specific settings can be saved in the same shared\nDocker folder as other app's data. ",Object(r.b)("strong",{parentName:"p"},"Normally native installs use a\nconfiguration file and Docker installations use environment variables.")),Object(r.b)("p",null,"The variables to be set can be split into three categories:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Configuration of UnPoller itself."),Object(r.b)("li",{parentName:"ol"},"Configuration of the UniFi controller.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Multiple controllers are permitted for different sites."))),Object(r.b)("li",{parentName:"ol"},"Configuration of the output databases (plugins).",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"UnPoller may output to both InfluxDB and Prometheus simultaneously."),Object(r.b)("li",{parentName:"ul"},"Other outputs plugins can be created, but none exist currently.")))),Object(r.b)("p",null,"More documentation on the configuration options is included in the\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/unpoller/unpoller/blob/master/examples/up.conf.example"},"example configuration file"),"\nin the main Github repo."),Object(r.b)("p",null,"The following sections break down the various configuration options available\nfor the three main categories mentioned previously."),Object(r.b)("h2",{id:"poller"},"Poller"),Object(r.b)("p",null,"The poller section begins with the ",Object(r.b)("inlineCode",{parentName:"p"},"[poller]")," header and has the parameters below.\nThese control overall behavior of the application."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default and explanation")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_POLLER_DEBUG"),Object(r.b)("td",{parentName:"tr",align:null},"debug"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," turns on debug messages")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_POLLER_QUIET"),Object(r.b)("td",{parentName:"tr",align:null},"quiet"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," turns off timer messages")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_POLLER_PLUGINS_0"),Object(r.b)("td",{parentName:"tr",align:null},"plugins"),Object(r.b)("td",{parentName:"tr",align:null},"file list - ",Object(r.b)("inlineCode",{parentName:"td"},"empty"),"; advanced! plugin file, use _1, _2, etc to add more")))),Object(r.b)("p",null,"Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-toml"},"quiet = true\ndebug = false\n")),Object(r.b)("p",null,"Docker Example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'docker run -e "UP_POLLER_DEBUG=true" -e "UP_POLLER_QUIET=false" golift/unifi-poller\n')),Object(r.b)("h2",{id:"unifi-controller"},"UniFi Controller"),Object(r.b)("p",null,"The unifi section begins with the ",Object(r.b)("inlineCode",{parentName:"p"},"[unifi]")," header and has the following parameters:"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default and explanation")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DISABLE"),Object(r.b)("td",{parentName:"tr",align:null},"disable"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"),"  turns off this input. don't do that!")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DYNAMIC"),Object(r.b)("td",{parentName:"tr",align:null},"dynamic"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"),"  enables dynamic lookups (from prometheus)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_ROLE"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.role"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"URL")," allows grouping controllers")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_URL"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.url"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"https://127.0.0.1:8443"')," only applies if no controllers are defined (next section)")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_USER"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.user"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"unifipoller"')," default applies to any controller without a username")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_PASS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.pass"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'""')," default applies to any controller without a password")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_SITES"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_sites"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_IDS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_ids"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_EVENTS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_events"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_ALARMS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_alarms"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_ANOMALIES"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_anomalies"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SAVE_DPI"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.save_dpi"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_VERIFY_SSL"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.verify_ssl"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_DEFAULT_SITE_0"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.defaults.site.0"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'["all"]')," specify more sites with _1, _2, etc.")))),Object(r.b)("hr",null),Object(r.b)("div",{className:"admonition admonition-important alert alert--info"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"When configuring make sure that you do ",Object(r.b)("strong",{parentName:"p"},"not")," include ",Object(r.b)("inlineCode",{parentName:"p"},":8443")," on the url of the controller\nif you are using ",Object(r.b)("inlineCode",{parentName:"p"},"unifios"),". Those are: UDM Pro, UDM, UXG, or CkoudKey with recent firmware."))),Object(r.b)("p",null,"Most ",Object(r.b)("inlineCode",{parentName:"p"},"unifi")," configuration will look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-toml"},'[unifi]\n  url = "http://192.168.2.2"\n  user = "unifipoller"\n  pass = "unifip4assw0rd"\n  save_sites = true\n  save_ids = false\n  save_events = false\n  save_alarms = false\n  save_dpi = false\n  sites = [ "default" ]\n')),Object(r.b)("p",null,"Same example, but for Docker:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'docker run\n  -e "UP_UNIFI_DEFAULT_URL=http://127.0.0.1:8086" \\\n  -e "UP_UNIFI_DEFAULT_PASS=unifip4assw0rd" \\\n  -e "UP_UNIFI_DEFAULT_SAVE_SITES=true" \\\n  -e "UP_UNIFI_DEFAULT_PASS=unifipassw0rd" \\\n  -e "UP_UNIFI_DEFAULT_SITE_0=default" \\\n  golift/unifi-poller\n')),Object(r.b)("h3",{id:"multiple-controllers"},"Multiple Controllers"),Object(r.b)("p",null,"You can configure a single controller by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"UP_UNIFI_DEFAULT")," variables above,\nbut you can also configure a single, or multiple controllers by setting the variables below."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you only have one controller, use the ",Object(r.b)("inlineCode",{parentName:"p"},"default")," variables described above."),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Do not use the variables described below, if you only have 1 controller.")))),Object(r.b)("p",null,"You may repeat the ",Object(r.b)("inlineCode",{parentName:"p"},"[[unifi.controller]]")," section as many times as you want to add more controllers.\nIf you're configuring controllers using env variables, start at ",Object(r.b)("inlineCode",{parentName:"p"},"_0")," and change ",Object(r.b)("inlineCode",{parentName:"p"},"_0")," to ",Object(r.b)("inlineCode",{parentName:"p"},"_1"),"\nto add a second, then ",Object(r.b)("inlineCode",{parentName:"p"},"_2")," and so on."),Object(r.b)("p",null,"Like any configured list, you may configure controllers with a file or env vars, or both."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default and explanation")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_ROLE"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.role"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"URL")," allows grouping controllers, default applies to any controller without a role")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_URL"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.url"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"https://127.0.0.1:8443"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_USER"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.user"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"unifipoller"'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_PASS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.pass"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'""'))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_SITES"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.save_sites"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"true")," Powers Network Sites dashboard")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_IDS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.save_ids"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_EVENTS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.save_events"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_ALARMS"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.save_alarms"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_ANOMALIES"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.save_anomalies"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Only works with InfluxDB / Loki, added in v2.0.2")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SAVE_DPI"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.save_dpi"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Powers DPI dashboard")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_VERIFY_SSL"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.verify_ssl"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false")," Verify controller SSL certificate")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_UNIFI_CONTROLLER_0_SITE_0"),Object(r.b)("td",{parentName:"tr",align:null},"unifi.controller.site.0"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'["all"]')," specify more sites with _1, _2, etc")))),Object(r.b)("h2",{id:"output-plugins"},"Output Plugins"),Object(r.b)("h3",{id:"prometheus"},"Prometheus"),Object(r.b)("p",null,"This section begins with ",Object(r.b)("inlineCode",{parentName:"p"},"[prometheus]")," and configures an HTTP listener where a scrape\ndaemon, such as Prometheus or InfluxDB 2.0 may obtain metrics. See the\n",Object(r.b)("a",{parentName:"p",href:"../dependencies/prometheus"},"Prometheus")," page for Prometheus configuration instructions."),Object(r.b)("p",null,"While Prometheus provides some configuration parameters, you shouldn't change them.\nIf you don't use Prometheus, set ",Object(r.b)("inlineCode",{parentName:"p"},"disable")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true"),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default and explanation")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_DISABLE"),Object(r.b)("td",{parentName:"tr",align:null},"prometheus.disable"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_NAMESPACE"),Object(r.b)("td",{parentName:"tr",align:null},"prometheus.namespace"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"unifipoller"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_HTTP_LISTEN"),Object(r.b)("td",{parentName:"tr",align:null},"prometheus.http_listen"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"0.0.0.0:9130"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_REPORT_ERRORS"),Object(r.b)("td",{parentName:"tr",align:null},"prometheus.report_errors"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"false"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_PROMETHEUS_BUFFER"),Object(r.b)("td",{parentName:"tr",align:null},"prometheus.buffer"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"50"))))),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The ",Object(r.b)("a",{parentName:"p",href:"../dependencies/prometheus"},"Prometheus")," page has a full explanation of how to configure Poller."))),Object(r.b)("h3",{id:"influxdb"},"InfluxDB"),Object(r.b)("p",null,"This section begins with ",Object(r.b)("inlineCode",{parentName:"p"},"[influxdb]")," and configures a single InfluxDB write destination."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"ENV")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"config")),Object(r.b)("th",{parentName:"tr",align:null},Object(r.b)("strong",{parentName:"th"},"default and explanation")))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_URL"),Object(r.b)("td",{parentName:"tr",align:null},"influxdb.url"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"http://127.0.0.1:8086"')," influxdb URL")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_DB"),Object(r.b)("td",{parentName:"tr",align:null},"influxdb.db"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"unifi"')," name of database you created in influx")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_USER"),Object(r.b)("td",{parentName:"tr",align:null},"influxdb.user"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"unifipoller"')," username with access to database")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_PASS"),Object(r.b)("td",{parentName:"tr",align:null},"influxdb.pass"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"unifipoller"')," password for username")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},"UP_INFLUXDB_INTERVAL"),Object(r.b)("td",{parentName:"tr",align:null},"influxdb.interval"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},'"30s"'),' how often to poll and collect metrics, ie "1m" or "90s"')))),Object(r.b)("p",null,"InfluxDB is very easy to use with UnPoller, and it's recommend if this whole\nmetrics ecosystem is new to you. All you do is add a small configuration like you\nsee below and poller sends all your glorious data into the database."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-toml"},'[influxdb]\n  url = "http://127.0.0.1:8086"\n  db = "unifi"\n  interval="60s"\n')),Object(r.b)("p",null,"Using Docker it may look like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},'docker run\n  -e "UP_INFLUXDB_URL=http://127.0.0.1:8086" \\\n  -e "UP_INFLUXDB_DB=unifi" \\\n  -e "UP_INFLUXDB_INTERVAL=60s" \\\n  -e "UP_UNIFI_DEFAULT_URL=https://192.168.1.2"\n  -e "UP_UNIFI_DEFAULT_PASS=unifipassw0rd"\n  golift/unifi-poller\n')))}p.isMDXComponent=!0}}]);
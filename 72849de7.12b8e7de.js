(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{106:function(e,t,a){"use strict";a.d(t,"a",(function(){return c})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),u=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),c=u(a),d=r,m=c["".concat(i,".").concat(d)]||c[d]||s[d]||l;return a?n.a.createElement(m,o(o({ref:t},p),{},{components:a})):n.a.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var b in t)hasOwnProperty.call(t,b)&&(o[b]=t[b]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return p}));var r=a(3),n=(a(0),a(106));const l={id:"changelog",title:"Change Log"},i={unversionedId:"poller/changelog",id:"poller/changelog",isDocsHomePage:!1,title:"Change Log",description:"Recent Releases (2020+)",source:"@site/docs/poller/changelog.md",slug:"/poller/changelog",permalink:"/docs/poller/changelog",version:"current",sidebar:"someSidebar",previous:{title:"Contributors",permalink:"/docs/poller/contributors"},next:{title:"Getting Started",permalink:"/docs/install/gettingstarted"}},o=[{value:"Recent Releases (2020+)",id:"recent-releases-2020",children:[{value:"<code>v2.0.2</code> (TBD.2020) Ordenalogy",id:"v202-tbd2020-ordenalogy",children:[]},{value:"<code>v2.0.1</code> (06.15.2020) Enhancements",id:"v201-06152020-enhancements",children:[]},{value:"<code>v2.0</code> (02.06.2020) Multi-Controller Support, FreeBSD pkg + APT &amp; YUM repos + DPI",id:"v20-02062020-multi-controller-support-freebsd-pkg--apt--yum-repos--dpi",children:[]}]},{value:"Older (pre-2020) Releases",id:"older-pre-2020-releases",children:[{value:"<code>v1.6.3</code> (12.12.2019) Exit Behavior Changed",id:"v163-12122019-exit-behavior-changed",children:[]},{value:"<code>v1.6</code> (12.01.2019) Prometheus Support &amp; InfluxDB Improvements + Dashboard Updates",id:"v16-12012019-prometheus-support--influxdb-improvements--dashboard-updates",children:[]},{value:"<code>v1.5.4</code> (10.08.2019) Bug Fixes",id:"v154-10082019-bug-fixes",children:[]},{value:"<code>v1.5.3</code> (09.09.2019) UDM and UDM Pro - Docker ENV Support",id:"v153-09092019-udm-and-udm-pro---docker-env-support",children:[]},{value:"<code>v1.5</code> (07.11.2019) Intrusion Detection Data",id:"v15-07112019-intrusion-detection-data",children:[]},{value:"<code>v1.4</code> (07.05.2019) Data Surplus",id:"v14-07052019-data-surplus",children:[]},{value:"<code>v1.3.3</code> (06.19.2019) Exit on Error",id:"v133-06192019-exit-on-error",children:[]},{value:"<code>v1.3</code> (06.13.2019) Better Debug, Better Output, Better Build, Better Layout",id:"v13-06132019-better-debug-better-output-better-build-better-layout",children:[]},{value:"<code>v1.2</code> (06.05.2019) Better Site support",id:"v12-06052019-better-site-support",children:[]},{value:"<code>v1.1.1</code> (05.30.2019) Packages! Better run support",id:"v111-05302019-packages-better-run-support",children:[]},{value:"<code>v1.0</code> (01.26.2019) Cleanup and New Libraries",id:"v10-01262019-cleanup-and-new-libraries",children:[]},{value:"<code>v0.2</code> (04.22.2018) Full Client Support",id:"v02-04222018-full-client-support",children:[]}]}],b={toc:o};function p({components:e,...t}){return Object(n.b)("wrapper",Object(r.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"recent-releases-2020"},"Recent Releases (2020+)"),Object(n.b)("h3",{id:"v202-tbd2020-ordenalogy"},Object(n.b)("inlineCode",{parentName:"h3"},"v2.0.2")," (TBD.2020) Ordenalogy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds collection of UniFi Events, Anomalies, Alarms and IDS.",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"IDS collection existed before, but it wasn't as good as it is now."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"WARNING"),": This data is not correctly redacted when ",Object(n.b)("inlineCode",{parentName:"li"},"hash_pii")," is turned on."))),Object(n.b)("li",{parentName:"ul"},"Adds ",Object(n.b)("strong",{parentName:"li"},"Loki")," output support for events, anomalies, alarms and IDS (in addition to InfluxDB)."),Object(n.b)("li",{parentName:"ul"},"Adds a built-in read-only web-server with minimal output data and an API.")),Object(n.b)("h3",{id:"v201-06152020-enhancements"},Object(n.b)("inlineCode",{parentName:"h3"},"v2.0.1")," (06.15.2020) Enhancements"),Object(n.b)("p",null,"This release contains enhancements.\nSee ",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/pull/240"},"this pull request")," for more details."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Set timezone with TZ environment variable."),Object(n.b)("li",{parentName:"ul"},"Fixes ARM64 Docker builds."),Object(n.b)("li",{parentName:"ul"},"Fixes macOS Homebrew builds."),Object(n.b)("li",{parentName:"ul"},"Adds temperatures for UDM."),Object(n.b)("li",{parentName:"ul"},"Adds switch port data for UAP and UDM."),Object(n.b)("li",{parentName:"ul"},"Can now read InfluxDB and UniFi controller passwords from dedicated secrets files."),Object(n.b)("li",{parentName:"ul"},"Defaults for ",Object(n.b)("inlineCode",{parentName:"li"},"save_ids"),", ",Object(n.b)("inlineCode",{parentName:"li"},"save_dpi")," and ",Object(n.b)("inlineCode",{parentName:"li"},"verify_ssl")," now properly apply."),Object(n.b)("li",{parentName:"ul"},"Prints controller configuration information on startup."),Object(n.b)("li",{parentName:"ul"},"Can redact (md5 hash) personal info: mac address and hostname."),Object(n.b)("li",{parentName:"ul"},"Various bug fixes."),Object(n.b)("li",{parentName:"ul"},"Prometheus scrape config format updated.")),Object(n.b)("h3",{id:"v20-02062020-multi-controller-support-freebsd-pkg--apt--yum-repos--dpi"},Object(n.b)("inlineCode",{parentName:"h3"},"v2.0")," (02.06.2020) Multi-Controller Support, FreeBSD pkg + APT & YUM repos + DPI"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v2.0.0"},"v2.0")),Object(n.b)("h4",{id:"v2-breaking-changes"},"v2 Breaking Changes"),Object(n.b)("p",null,"These things have changed and will require you to take action when you upgrade\nto this version. Make sure to copy your old config file values to the new config\nfile format. If you use environment variables, they all need to be updated!"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Config file format changed.")," All key names refactored for consistency."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Environment variable names changed.")," All key names refactored for consistency."),Object(n.b)("li",{parentName:"ul"},"Some graphs require Grafana 6.6.0. Upgrade yours today!"),Object(n.b)("li",{parentName:"ul"},"All graphs require InfluxDB 1.7.x. Upgrade yours today!")),Object(n.b)("h4",{id:"v2-updates"},"v2 Updates"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"New ",Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller"},"GitHub Org")," created for UniFi Poller. Moved from personal repo."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/influxunifi"},"InfluxDB output code moved to separate library"),"\nas modular plugin. (output module)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/inputunifi"},"UniFi input code moved to separate library"),"\nas modular plugin. (input module)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/promunifi"},"Prometheus code moved to separate library"),"\nas modular plugin. (output module)"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/poller"},"Poller app code moved to separate library"),".\nThe main repo only handles builds and golang vendors now."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi"},"UniFi API code moved to new location"),"\nfrom golift github org. It fits better in the new unifi-poller org."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://golift.io/cnfg"},"New library created")," for config file and environment variable parsing."),Object(n.b)("li",{parentName:"ul"},"Dynamic go plugin support added for output modules. May not prove useful."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/mysqlunifi"},"Example (MySQL) dynamic output module"),"\ncreated (for above)."),Object(n.b)("li",{parentName:"ul"},"Support for latest UDM OS using 5.12.55+ controller version. API paths changed."),Object(n.b)("li",{parentName:"ul"},"Switch from ",Object(n.b)("inlineCode",{parentName:"li"},"dep")," to go modules. Now using to Go 1.13, from 1.12."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Clients' and Sites' DPI data added.")," It was a lot of work."),Object(n.b)("li",{parentName:"ul"},'Application refactored to use "registering module" approach.',Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"This means the main library knows nothing about the input or output modules.\nThey register their own interfaces on load."))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Adds FreeBSD packages")," and binaries for amd64, i386 and armhf."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"New dashboard: Client DPI")," (for Prometheus and InfluxDB, 12 total)"),Object(n.b)("li",{parentName:"ul"},"New ",Object(n.b)("a",{parentName:"li",href:"http://bintray.com/golift"},"JFrogg Bintray ",Object(n.b)("strong",{parentName:"a"},"YUM and APT repos"))," for users to keep up to date."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Multiple controller support added to input module."),"\nYou may configure multiple controllers and group them with roles."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Dynamic controller support added to input module and prometheus module.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"All ",Object(n.b)("a",{parentName:"strong",href:"https://grafana.com/dashboards?search=unifi-poller"},"dashboards updated"),".\nMulti-controller support added"),", but hidden (since most users wont need it)."),Object(n.b)("li",{parentName:"ul"},"Many build fixes and improvements for packages, FreeBSD, Homebrew and Docker."),Object(n.b)("li",{parentName:"ul"},"Type Conflict error fixes for InfluxDB (and probably more errors added, uhg)."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/blob/master/scripts/install.sh"},"Install script"),"\nupdates. Supports arm64 better and now supports FreeBSD packages."),Object(n.b)("li",{parentName:"ul"},"unRAID ",Object(n.b)("a",{parentName:"li",href:"https://github.com/selfhosters/unRAID-CA-templates/blob/master/templates/unifi-poller.xml"},"Community Applications template"),"\nupdated."),Object(n.b)("li",{parentName:"ul"},"Many many ",Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/unifi-poller/wiki"},"wiki updates"),"."),Object(n.b)("li",{parentName:"ul"},"The wiki was moved into its ",Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/wiki"},"own repo")," and\nattached to a build pipeline that auto deploys tested changes to the main wiki (linked above)"),Object(n.b)("li",{parentName:"ul"},"The dashboards were moved into their ",Object(n.b)("a",{parentName:"li",href:"https://github.com/unifi-poller/dashboards"},"own repo"),"\nand attached to a build pipeline that auto deploys them to Grafana.com.")),Object(n.b)("h2",{id:"older-pre-2020-releases"},"Older (pre-2020) Releases"),Object(n.b)("p",null,"The following releases were drafted in this file from memory.\nThey are condensed and contain fewer details than the more recent releases above."),Object(n.b)("h3",{id:"v163-12122019-exit-behavior-changed"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.6.3")," (12.12.2019) Exit Behavior Changed"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.6.1"},"v1.6.1"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.6.2"},"v1.6.2"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.6.3"},"v1.6.3")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Prometheus bug fixes."),Object(n.b)("li",{parentName:"ul"},"App no longer exits on error (yay unRAID users).")),Object(n.b)("h3",{id:"v16-12012019-prometheus-support--influxdb-improvements--dashboard-updates"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.6")," (12.01.2019) Prometheus Support & InfluxDB Improvements + Dashboard Updates"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.6.0"},"v1.6")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Prometheus support added.")),Object(n.b)("li",{parentName:"ul"},"Five new Prometheus dashboards."),Object(n.b)("li",{parentName:"ul"},"Lots of unused data trimmed from InfluxDB output."),Object(n.b)("li",{parentName:"ul"},"Fixed UAP VAP data collection. It was all wrong."),Object(n.b)("li",{parentName:"ul"},"Updated all InfluxDB dashboards.")),Object(n.b)("h3",{id:"v154-10082019-bug-fixes"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.5.4")," (10.08.2019) Bug Fixes"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.5.4"},"v1.5.4")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"This release provides fixes for a handful of bugs that only affect a few controllers and use cases."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"max_errors")," was removed from the config file. Any error will cause the poller to exit now."),Object(n.b)("li",{parentName:"ul"},"InfluxDB SSL cert verification added.")),Object(n.b)("h3",{id:"v153-09092019-udm-and-udm-pro---docker-env-support"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.5.3")," (09.09.2019) UDM and UDM Pro - Docker ENV Support"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.5.1"},"v1.5.1"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.5.2"},"v1.5.2"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.5.3"},"v1.5.3")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"UDM and UDM Pro (UniFi Dream Machine) support added. 5.11.38"),Object(n.b)("li",{parentName:"ul"},"Dashboards Updated"),Object(n.b)("li",{parentName:"ul"},"A fix was put in place to make the application more resilient to a failing\nstartup condition (on Linux using systemd)."),Object(n.b)("li",{parentName:"ul"},"The application can now be configured with environment variables,\nmaking it much easier to run in Docker."),Object(n.b)("li",{parentName:"ul"},'Some "defaults" were changed to match documentation, but nothing major.'),Object(n.b)("li",{parentName:"ul"},"Also included is a new re-authenticate feature. Most people won't need this,\nbut at least one person does.")),Object(n.b)("h3",{id:"v15-07112019-intrusion-detection-data"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.5")," (07.11.2019) Intrusion Detection Data"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.4.1"},"v1.4.1"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.4.2"},"v1.4.2"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.5.0"},"v1.5")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"UniFi 5.11.x support."),Object(n.b)("li",{parentName:"ul"},"Multi-architecture Docker Images"),Object(n.b)("li",{parentName:"ul"},"IDS collection. Actually sucks."),Object(n.b)("li",{parentName:"ul"},"Bug fix: The application was failing to restart after exiting on Linux."),Object(n.b)("li",{parentName:"ul"},"Bug fix: Some beta controllers are failing to unmarshal a specific piece of data."),Object(n.b)("li",{parentName:"ul"},"Bug fix: Devices without names were not selectable in the dashboard variables."),Object(n.b)("li",{parentName:"ul"},"Build improvements thanks to ",Object(n.b)("a",{parentName:"li",href:"https://github.com/golift/application-builder"},"application-builder"),".")),Object(n.b)("h3",{id:"v14-07052019-data-surplus"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.4")," (07.05.2019) Data Surplus"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.4.0"},"v1.4")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Clients and UAP dashboards overhauled."),Object(n.b)("li",{parentName:"ul"},"Data formats changed."),Object(n.b)("li",{parentName:"ul"},"Bug fixes."),Object(n.b)("li",{parentName:"ul"},"Add additional config file support (yaml, json, xml)."),Object(n.b)("li",{parentName:"ul"},"Switched to a newer (better maintained) TOML library (only used for config file)."),Object(n.b)("li",{parentName:"ul"},"Dashboards are moved out of the package and into Grafana.com.\nThis allows them to be updated independently of this application."),Object(n.b)("li",{parentName:"ul"},'A new run-mode has been added. The application can start, collect metrics,\nreport them to influx and exit. This mode is called "lambda".'),Object(n.b)("li",{parentName:"ul"},"RPM package will not overwrite up.conf now."),Object(n.b)("li",{parentName:"ul"},"Homebrew file passes all audit tests now."),Object(n.b)("li",{parentName:"ul"},"Makefile had a lot of updates."),Object(n.b)("li",{parentName:"ul"},"32 bit rpm and deb packages are built now (in addition to the existing 64 bit packages)"),Object(n.b)("li",{parentName:"ul"},"A 64-bit windows exe binary is available now."),Object(n.b)("li",{parentName:"ul"},"32 bit arm packages for deb and rpm are now available."),Object(n.b)("li",{parentName:"ul"},"New script that automatically downloads (and optionally installs) the\ncorrect package for your system.")),Object(n.b)("h3",{id:"v133-06192019-exit-on-error"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.3.3")," (06.19.2019) Exit on Error"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.3.1"},"v1.3.1"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.3.2"},"v1.3.2"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.3.3"},"v1.3.3")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"General code updates."),Object(n.b)("li",{parentName:"ul"},"Bug fixes."),Object(n.b)("li",{parentName:"ul"},"Dashboard fixes."),Object(n.b)("li",{parentName:"ul"},"Adds very basic DPI counter stats, but no graphs."),Object(n.b)("li",{parentName:"ul"},"Improved logging and debug."),Object(n.b)("li",{parentName:"ul"},"Homebrew fixes."),Object(n.b)("li",{parentName:"ul"},"Log file location change for macOS."),Object(n.b)("li",{parentName:"ul"},"Manual updates."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Adds fifth dashboard. (Network Sites)")),Object(n.b)("li",{parentName:"ul"},"Adds Docker builds and release.")),Object(n.b)("h3",{id:"v13-06132019-better-debug-better-output-better-build-better-layout"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.3")," (06.13.2019) Better Debug, Better Output, Better Build, Better Layout"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.2.3"},"v1.2.3"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.2.2"},"v1.2.2"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.3.0"},"v1.3")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Improved logging and debug."),Object(n.b)("li",{parentName:"ul"},"Build pipeline updates."),Object(n.b)("li",{parentName:"ul"},"Homebrew support."),Object(n.b)("li",{parentName:"ul"},"Main routine put into a library."),Object(n.b)("li",{parentName:"ul"},"Bug fixes and RPM build fix."),Object(n.b)("li",{parentName:"ul"},"Dashboard updates."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Adds USW dashboard."))),Object(n.b)("h3",{id:"v12-06052019-better-site-support"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.2")," (06.05.2019) Better Site support"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.2.0"},"v1.2")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Bug fixes."),Object(n.b)("li",{parentName:"ul"},"Site name added to metrics making dashboards better."),Object(n.b)("li",{parentName:"ul"},"Travis-CI builds packages now.")),Object(n.b)("h3",{id:"v111-05302019-packages-better-run-support"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.1.1")," (05.30.2019) Packages! Better run support"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.1.0"},"v1.1.0"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.1.1"},"v1.1.1")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds multi site support. Was only working with ",Object(n.b)("inlineCode",{parentName:"li"},"default"),"."),Object(n.b)("li",{parentName:"ul"},"Provides precompiled binaries for linux amd64 and macos amd64."),Object(n.b)("li",{parentName:"ul"},"Provides linux and macos packages. RPM, DEB, PKG for amd64 arch."),Object(n.b)("li",{parentName:"ul"},"Bug fixes and small features.")),Object(n.b)("h3",{id:"v10-01262019-cleanup-and-new-libraries"},Object(n.b)("inlineCode",{parentName:"h3"},"v1.0")," (01.26.2019) Cleanup and New Libraries"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v0.2a"},"v0.2a"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/V0.2b"},"v0.2b"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/0.3.0"},"v0.3"),",\n",Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v1.0.0"},"v1.0")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Adds more device support: UAP USG")),Object(n.b)("li",{parentName:"ul"},"Adds better json parsing."),Object(n.b)("li",{parentName:"ul"},"Avoid errors from different controllers rendering the same data in different ways."),Object(n.b)("li",{parentName:"ul"},"Better log output."),Object(n.b)("li",{parentName:"ul"},"Split UniFi API collection code into a library.")),Object(n.b)("h3",{id:"v02-04222018-full-client-support"},Object(n.b)("inlineCode",{parentName:"h3"},"v0.2")," (04.22.2018) Full Client Support"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://github.com/unifi-poller/unifi-poller/releases/tag/v0.2"},"v0.2")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adds Support for Pulling Client Data")))}p.isMDXComponent=!0}}]);
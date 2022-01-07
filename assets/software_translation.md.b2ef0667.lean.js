import{_ as r,c as s,o as n,a as e,b as a}from"./app.e4fe013f.js";var t="/assets/translate.51f1b395.jpg";const D='{"title":"Shopizer language pack generator","description":"","frontmatter":{},"relativePath":"software/translation.md","lastUpdated":1638461820409}',o={},l=e("h1",{id:"shopizer-language-pack-generator",tabindex:"-1"},[a("Shopizer language pack generator "),e("a",{class:"header-anchor",href:"#shopizer-language-pack-generator","aria-hidden":"true"},"#")],-1),i=e("p",null,"This software generates Shopizer labels for a new language. Shopizer comes with a few language packs already created such as english and frech; when a new language is required 2 options are possible (1) copy and create languages by hand or (2) use this software to auto-generate a new one.",-1),u=e("p",null,[e("img",{src:t,alt:"Shopizer translation diagram",title:"Shopizer translation software"})],-1),c=e("h4",{id:"requirements",tabindex:"-1"},[a("requirements "),e("a",{class:"header-anchor",href:"#requirements","aria-hidden":"true"},"#")],-1),h=e("p",null,"-- Most recent version of Shopizer on your machine -- An AWS (Amazon Web Service) account -- Java SDK (version 1.8 +)",-1),d=e("h4",{id:"prepare-instructions",tabindex:"-1"},[a("prepare instructions "),e("a",{class:"header-anchor",href:"#prepare-instructions","aria-hidden":"true"},"#")],-1),g=e("ul",null,[e("li",null,"Clone Shopizer from github")],-1),p=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`git clone -b master https://github.com/shopizer-ecommerce/shopizer.git
`)])],-1),_=e("ul",null,[e("li",null,"Look in shopizer/sm-shop/src/main/resources/bundles if language files are already there for required language (files have this format file_<2 letter language iso code>.properties (ex shopizer_fr.properties)"),e("li",null,"Add role to AWS user"),e("li",null,[a("Log on to AWS and add 'TranslateFullAccess' to your favorite user. See this document for more details "),e("a",{href:"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html",target:"_blank",rel:"noopener noreferrer"},"https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user.html")]),e("li",null,[a("Get your AWS access key and secret access key (more details here "),e("a",{href:"https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/",target:"_blank",rel:"noopener noreferrer"},"https://aws.amazon.com/premiumsupport/knowledge-center/create-access-key/"),a(")")])],-1),m=e("h4",{id:"generate-language-instructions",tabindex:"-1"},[a("generate language instructions "),e("a",{class:"header-anchor",href:"#generate-language-instructions","aria-hidden":"true"},"#")],-1),f=e("ul",null,[e("li",null,"Clone Language software from github")],-1),S=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`git clone -b master https://github.com/shopizer-ecommerce/languages.git
`)])],-1),b=e("ul",null,[e("li",null,"Build language application")],-1),z=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`cd LanguagePackBuilder
mvnw clean install
`)])],-1),w=e("ul",null,[e("li",null,[a("Execute generate language "),e("ul",null,[e("li",null,"Requires shopizer directory absolute path (1)"),e("li",null,"Requires target language 2 letter iso ced (example es for Spanish) (2)"),e("li",null,"Requires AWS access key (3)"),e("li",null,"Requires AWS secret access key (4)"),e("li",null,"parameters 1 and 2 to be sent as execution parameters and parameters 3 and 4 to be sent as environment variables")])])],-1),k=e("div",{class:"language-sh"},[e("pre",null,[e("code",null,`cd target
java -jar LanguagePackBuilder-1.0.0-SNAPSHOT.jar com.shopizer.tools.language.LanguagePackBuilder path language -DAWS_ACCESS_KEY_ID=abd...xyz -DAWS_SECRET_ACCESS_KEY=xyz...123
`)])],-1),y=e("h4",{id:"share-your-new-language-with-us",tabindex:"-1"},[a("Share your new language with us ! "),e("a",{class:"header-anchor",href:"#share-your-new-language-with-us","aria-hidden":"true"},"#")],-1),v=e("ul",null,[e("li",null,"Sanitize and 2x check results before sharing"),e("li",null,"Open a pull request in Shopizer")],-1),A=[l,i,u,c,h,d,g,p,_,m,f,S,b,z,w,k,y,v];function x(q,W,E,B,C,L){return n(),s("div",null,A)}var P=r(o,[["render",x]]);export{D as __pageData,P as default};

(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(21),n=c.n(s),r=(c(54),c(15)),i=c(16),d=c(18),j=c(17),l=(c.p,c(55),c(56),c(26)),h=c(7),b=c(89),o=c(24),O=c.n(o),x=c(88),m=c(1),v=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={stateData:{}},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://data.covid19india.org/state_district_wise.json").then((function(t){e.setState({stateData:t.data})}))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.stateData);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"State wise Covid details"}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)(x.a,{children:t.map((function(t,c){var a=e.state.stateData[t].districtData,s=(Object.keys(a),0),n=0,r=0,i=0,d=[];for(var j in a){s+=a[j].active,n+=a[j].confirmed,r+=a[j].recovered,i+=a[j].deceased;var l=a[j];l.district_name=j,d.push(l)}return Object(m.jsxs)(x.a.Item,{eventKey:c,children:[Object(m.jsxs)(x.a.Header,{children:[Object(m.jsxs)("span",{className:"btn-info p-1 mr-2",children:[" ",t]})," - ",Object(m.jsxs)("span",{className:"btn-dark p-1 mr-2",children:[" Total cases: ",n]})," - ",Object(m.jsxs)("span",{className:"btn-dark p-1 mr-2",children:[" Active: ",s]})," - ",Object(m.jsxs)("span",{className:"btn-dark p-1 mr-2",children:[" Recovered: ",r]})," - ",Object(m.jsxs)("span",{className:"btn-dark p-1 mr-2",children:[" Deaths: ",i]})]}),Object(m.jsx)(x.a.Body,{children:Object(m.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"District"}),Object(m.jsx)("th",{children:"Confirmed cases"}),Object(m.jsx)("th",{children:"Active cases"}),Object(m.jsx)("th",{children:"Recovered"}),Object(m.jsx)("th",{children:"Deaths"})]})}),Object(m.jsx)("tbody",{children:d.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:e.district_name}),Object(m.jsx)("td",{children:e.confirmed}),Object(m.jsx)("td",{children:e.active}),Object(m.jsx)("td",{children:e.recovered}),Object(m.jsx)("td",{children:e.deceased})]})}))})]})})]})}))})})})]})}}]),c}(a.Component),u=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={data:{}},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://corona.lmao.ninja/v2/countries/india").then((function(t){console.log(t.data),e.setState({data:t.data})}))}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-md-12",children:[Object(m.jsx)("img",{src:"https://www.countryflags.io/in/shiny/64.png",alt:""}),Object(m.jsx)("h2",{children:"India Covid details"})]}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsxs)("div",{className:"row",children:[Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(b.a,{className:"bg-primary text-white",style:{width:"18rem"},children:Object(m.jsxs)(b.a.Body,{className:"text-center",children:[Object(m.jsx)(b.a.Title,{children:"Total cases"}),Object(m.jsx)("h2",{children:this.state.data.cases}),Object(m.jsxs)(b.a.Text,{children:["[Today: ",this.state.data.todayCases,"]"]})]})})}),Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(b.a,{className:"bg-warning ",style:{width:"18rem"},children:Object(m.jsxs)(b.a.Body,{className:"text-center",children:[Object(m.jsx)(b.a.Title,{children:"Active cases"}),Object(m.jsx)("h2",{children:this.state.data.active}),Object(m.jsxs)(b.a.Text,{children:["[Today: ",this.state.data.todayCases,"]"]})]})})}),Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(b.a,{className:"bg-success text-white",style:{width:"18rem"},children:Object(m.jsxs)(b.a.Body,{className:"text-center",children:[Object(m.jsx)(b.a.Title,{children:"Recovered"}),Object(m.jsx)("h2",{children:this.state.data.recovered}),Object(m.jsxs)(b.a.Text,{children:["[Today: ",this.state.data.todayRecovered,"]"]})]})})}),Object(m.jsx)("div",{className:"col-md-3",children:Object(m.jsx)(b.a,{className:"bg-danger text-white",style:{width:"18rem"},children:Object(m.jsxs)(b.a.Body,{className:"text-center",children:[Object(m.jsx)(b.a.Title,{children:"Deaths"}),Object(m.jsx)("h2",{children:this.state.data.deaths}),Object(m.jsxs)(b.a.Text,{children:["[Today: ",this.state.data.todayDeaths,"]"]})]})})})]})}),Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsx)(v,{})})]})})}}]),c}(a.Component),p=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;return Object(r.a)(this,c),(e=t.call(this)).state={data:[]},e}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var e=this;O.a.get("https://corona.lmao.ninja/v2/countries").then((function(t){console.log(t.data),e.setState({data:t.data})}))}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h2",{children:"World Covid details"}),Object(m.jsx)("div",{className:"row",children:Object(m.jsx)("div",{className:"col-md-12",children:Object(m.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Country"}),Object(m.jsx)("th",{children:"Total cases"}),Object(m.jsx)("th",{children:"Active cases"}),Object(m.jsx)("th",{children:"Recovered"}),Object(m.jsx)("th",{children:"Deaths"})]})}),Object(m.jsx)("tbody",{children:this.state.data.map((function(e,t){return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[e.country,Object(m.jsx)("img",{src:e.countryInfo.flag,style:{width:"25px",marginLeft:"10px"},alt:""})]}),Object(m.jsx)("td",{children:e.cases}),Object(m.jsx)("td",{children:e.active}),Object(m.jsx)("td",{children:e.recovered}),Object(m.jsx)("td",{children:e.deaths})]})}))})]})})})]})}}]),c}(a.Component),f=c(90),y=c(86),g=c(87),N=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.call(this)}return Object(i.a)(c,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(f.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(m.jsxs)(y.a,{children:[Object(m.jsx)(f.a.Brand,{href:"#home",children:"COVID-19"}),Object(m.jsx)(f.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(m.jsx)(f.a.Collapse,{id:"responsive-navbar-nav",children:Object(m.jsxs)(g.a,{className:"me-auto",children:[Object(m.jsx)(l.b,{className:"nav-link",to:"/india",children:"India"}),Object(m.jsx)(l.b,{className:"nav-link",to:"/world",children:"World"}),Object(m.jsx)(l.b,{className:"nav-link",to:"/states",children:"State wise"})]})})]})})})}}]),c}(a.Component),k=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.call(this)}return Object(i.a)(c,[{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"container-fluid",children:Object(m.jsxs)(l.a,{children:[Object(m.jsx)(N,{}),Object(m.jsxs)(h.c,{children:[Object(m.jsx)(h.a,{exact:!0,path:"/",children:Object(m.jsx)(u,{})}),Object(m.jsx)(h.a,{path:"/india",children:Object(m.jsx)(u,{})}),Object(m.jsx)(h.a,{path:"/world",children:Object(m.jsx)(p,{})}),Object(m.jsx)(h.a,{path:"/states",children:Object(m.jsx)(v,{})})]})]})})})}}]),c}(a.Component),w=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};n.a.render(Object(m.jsx)(k,{}),document.getElementById("root")),w()}},[[84,1,2]]]);
//# sourceMappingURL=main.276c842f.chunk.js.map
(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{54:function(e,t,c){},55:function(e,t,c){},84:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(21),r=c.n(n),i=(c(54),c(15)),d=c(16),j=c(18),l=c(17),h=(c.p,c(55),c(56),c(26)),b=c(7),o=c(89),O=c(24),x=c.n(O),m=c(88),v=c(1),u=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;return Object(i.a)(this,c),(e=t.call(this)).state={stateData:{}},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://data.covid19india.org/state_district_wise.json").then((function(t){e.setState({stateData:t.data})}))}},{key:"render",value:function(){var e=this,t=Object.keys(this.state.stateData);return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"State wise Covid details"}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-md-12",children:Object(v.jsx)(m.a,{children:t.map((function(t,c){var a=e.state.stateData[t].districtData,s=(Object.keys(a),0),n=0,r=0,i=0,d=[];for(var j in a){s+=a[j].active,n+=a[j].confirmed,r+=a[j].recovered,i+=a[j].deceased;var l=a[j];l.district_name=j,d.push(l)}return Object(v.jsxs)(m.a.Item,{eventKey:c,children:[Object(v.jsxs)(m.a.Header,{children:[Object(v.jsxs)("span",{className:"btn-info p-1 mr-2",children:[" ",t]})," - ",Object(v.jsxs)("span",{className:"btn-dark p-1 mr-2",children:[" Total cases: ",n]})," - ",Object(v.jsxs)("span",{className:"btn-dark p-1 mr-2",children:[" Active: ",s]})," - ",Object(v.jsxs)("span",{className:"btn-dark p-1 mr-2",children:[" Recovered: ",r]})," - ",Object(v.jsxs)("span",{className:"btn-dark p-1 mr-2",children:[" Deaths: ",i]})]}),Object(v.jsx)(m.a.Body,{children:Object(v.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"District"}),Object(v.jsx)("th",{children:"Confirmed cases"}),Object(v.jsx)("th",{children:"Active cases"}),Object(v.jsx)("th",{children:"Recovered"}),Object(v.jsx)("th",{children:"Deaths"})]})}),Object(v.jsx)("tbody",{children:d.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:e.district_name}),Object(v.jsx)("td",{children:e.confirmed}),Object(v.jsx)("td",{children:e.active}),Object(v.jsx)("td",{children:e.recovered}),Object(v.jsx)("td",{children:e.deceased})]})}))})]})})]})}))})})})]})}}]),c}(a.Component),p=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;return Object(i.a)(this,c),(e=t.call(this)).state={data:{}},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://corona.lmao.ninja/v2/countries/india").then((function(t){console.log(t.data),e.setState({data:t.data})}))}},{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsxs)("div",{className:"col-md-12",children:[Object(v.jsx)("img",{src:"https://www.countryflags.io/in/shiny/64.png",alt:""}),Object(v.jsx)("h2",{children:"India Covid details"})]}),Object(v.jsx)("div",{className:"col-md-12",children:Object(v.jsxs)("div",{className:"row",children:[Object(v.jsx)("div",{className:"col-md-3",children:Object(v.jsx)(o.a,{className:"bg-primary text-white",style:{width:"18rem"},children:Object(v.jsxs)(o.a.Body,{className:"text-center",children:[Object(v.jsx)(o.a.Title,{children:"Total cases"}),Object(v.jsx)("h2",{children:this.state.data.cases}),Object(v.jsx)(o.a.Text,{})]})})}),Object(v.jsx)("div",{className:"col-md-3",children:Object(v.jsx)(o.a,{className:"bg-warning ",style:{width:"18rem"},children:Object(v.jsxs)(o.a.Body,{className:"text-center",children:[Object(v.jsx)(o.a.Title,{children:"Active cases"}),Object(v.jsx)("h2",{children:this.state.data.active}),Object(v.jsxs)(o.a.Text,{children:["[Today: ",this.state.data.todayCases,"]"]})]})})}),Object(v.jsx)("div",{className:"col-md-3",children:Object(v.jsx)(o.a,{className:"bg-success text-white",style:{width:"18rem"},children:Object(v.jsxs)(o.a.Body,{className:"text-center",children:[Object(v.jsx)(o.a.Title,{children:"Recovered"}),Object(v.jsx)("h2",{children:this.state.data.recovered}),Object(v.jsxs)(o.a.Text,{children:["[Today: ",this.state.data.todayRecovered,"]"]})]})})}),Object(v.jsx)("div",{className:"col-md-3",children:Object(v.jsx)(o.a,{className:"bg-danger text-white",style:{width:"18rem"},children:Object(v.jsxs)(o.a.Body,{className:"text-center",children:[Object(v.jsx)(o.a.Title,{children:"Deaths"}),Object(v.jsx)("h2",{children:this.state.data.deaths}),Object(v.jsxs)(o.a.Text,{children:["[Today: ",this.state.data.todayDeaths,"]"]})]})})})]})}),Object(v.jsx)("div",{className:"col-md-12",children:Object(v.jsx)(u,{})})]})})}}]),c}(a.Component),f=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){var e;return Object(i.a)(this,c),(e=t.call(this)).state={data:[]},e}return Object(d.a)(c,[{key:"componentDidMount",value:function(){var e=this;x.a.get("https://corona.lmao.ninja/v2/countries").then((function(t){console.log(t.data),e.setState({data:t.data})}))}},{key:"render",value:function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h2",{children:"World Covid details"}),Object(v.jsx)("div",{className:"row",children:Object(v.jsx)("div",{className:"col-md-12",children:Object(v.jsxs)("table",{className:"table table-bordered table-striped",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:"Country"}),Object(v.jsx)("th",{children:"Total cases"}),Object(v.jsx)("th",{children:"Active cases"}),Object(v.jsx)("th",{children:"Recovered"}),Object(v.jsx)("th",{children:"Deaths"})]})}),Object(v.jsx)("tbody",{children:this.state.data.map((function(e,t){return Object(v.jsxs)("tr",{children:[Object(v.jsxs)("td",{children:[e.country,Object(v.jsx)("img",{src:e.countryInfo.flag,style:{width:"25px",marginLeft:"10px"},alt:""})]}),Object(v.jsx)("td",{children:e.cases}),Object(v.jsx)("td",{children:e.active}),Object(v.jsx)("td",{children:e.recovered}),Object(v.jsx)("td",{children:e.deaths})]})}))})]})})})]})}}]),c}(a.Component),y=c(90),g=c(86),N=c(87),k=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.call(this)}return Object(d.a)(c,[{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)(y.a,{collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:Object(v.jsxs)(g.a,{children:[Object(v.jsx)(y.a.Brand,{href:"/covid-tracker",children:"COVID-19 Status"}),Object(v.jsx)(y.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(v.jsx)(y.a.Collapse,{id:"responsive-navbar-nav",children:Object(v.jsxs)(N.a,{className:"me-auto",children:[Object(v.jsx)(h.b,{className:"nav-link",to:"/covid-tracker/india",children:"India"}),Object(v.jsx)(h.b,{className:"nav-link",to:"/covid-tracker/world",children:"World"})]})})]})})})}}]),c}(a.Component),w=function(e){Object(j.a)(c,e);var t=Object(l.a)(c);function c(){return Object(i.a)(this,c),t.call(this)}return Object(d.a)(c,[{key:"render",value:function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"container-fluid",children:Object(v.jsxs)(h.a,{children:[Object(v.jsx)(k,{}),Object(v.jsxs)(b.c,{children:[Object(v.jsx)(b.a,{exact:!0,path:"/covid-tracker",children:Object(v.jsx)(p,{})}),Object(v.jsx)(b.a,{path:"/covid-tracker/india",children:Object(v.jsx)(p,{})}),Object(v.jsx)(b.a,{path:"/covid-tracker/world",children:Object(v.jsx)(f,{})}),Object(v.jsx)(b.a,{path:"/covid-tracker/states",children:Object(v.jsx)(u,{})})]})]})})})}}]),c}(a.Component),T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,91)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(w,{})}),document.getElementById("root")),T()}},[[84,1,2]]]);
//# sourceMappingURL=main.0f4ce02a.chunk.js.map
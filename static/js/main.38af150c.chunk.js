(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),s=n(7),i=n(6),l=n(1),p=n(2),u=n(4),h=n(3),d=n(5),f=function(e){return o.a.createElement("header",null,o.a.createElement("h1",{className:"app-header__title"},"Super Sticky Notes"),o.a.createElement("aside",{className:"app-header__controls"},o.a.createElement("button",{onClick:e.newNote,className:"add-new"},"+ New Note"),o.a.createElement("input",{onChange:e.onSearch,className:"search",type:"text",placeholder:"Type here to search...",value:e.searchText})))},m=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).updateTitle=function(e){var t=n.props.note.id,a=e.target.value;n.props.onType(t,"title",a)},n.updateDescription=function(e){var t=n.props.note.id,a=e.target.value;n.props.onType(t,"description",a)},n.deleteNote=function(){var e=n.props.note.id;n.props.onDelete(e)},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("li",{className:"note"},o.a.createElement("input",{onChange:this.updateTitle,className:"note__title",type:"text",placeholder:"Title",value:this.props.note.title}),o.a.createElement("textarea",{onChange:this.updateDescription,className:"note__description",placeholder:"Description...",value:this.props.note.description}),o.a.createElement("span",{className:"note__delete",onClick:this.deleteNote},"X"))}}]),t}(a.Component),v=function(e){var t=e.notes.filter(function(e){return e.doesMatchSearch}).map(function(t){return o.a.createElement(m,{key:t.id,note:t,onType:e.onType,onDelete:e.onDelete})});return o.a.createElement("ul",{className:"notes-list"},t)},S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(o)))).state={notes:[{id:Date.now(),title:"",description:"",doesMatchSearch:!0}],searchText:""},n.newNote=function(){var e=[{id:Date.now(),title:"",description:"",doesMatchSearch:!0}].concat(Object(i.a)(n.state.notes));n.setState({notes:e})},n.onDelete=function(e){var t=n.state.notes.filter(function(t){return t.id!==e});n.setState({notes:t})},n.onType=function(e,t,a){var o=n.state.notes.filter(function(t){return t.id!==e}),r=n.state.notes.filter(function(t){return t.id===e});r[0][t]=a;var c=[].concat(Object(i.a)(r),Object(i.a)(o));n.setState({notes:c})},n.onSearch=function(e){var t=e.target.value.toLowerCase(),a=n.state.notes.map(function(e){return t?e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)?Object(s.a)({},e,{doesMatchSearch:!0}):Object(s.a)({},e,{doesMatchSearch:!1}):Object(s.a)({},e,{doesMatchSearch:!0})});n.setState({notes:a,searchText:t})},n}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("notesString");if(e){var t=JSON.parse(e);this.setState({notes:t})}}},{key:"componentDidUpdate",value:function(){var e=JSON.stringify(this.state.notes);localStorage.setItem("notesString",e)}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(f,{searchText:this.state.searchText,newNote:this.newNote,onSearch:this.onSearch}),o.a.createElement(v,{notes:this.state.notes,onType:this.onType,onDelete:this.onDelete}))}}]),t}(a.Component),y=(n(16),document.getElementById("root"));c.a.render(o.a.createElement(S,null),y)}},[[10,1,2]]]);
//# sourceMappingURL=main.38af150c.chunk.js.map
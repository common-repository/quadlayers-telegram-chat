(()=>{"use strict";var t={n:e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},d:(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e)};const e=window.jQuery;var a=t.n(e);window.wp.wpColorPicker,window.jQuery.select2,function(t){const{qltgm:e}=window,a=e.ajaxurl;function n(e){e?t("#submit").attr("disabled",!0):t("#submit").attr("disabled",!1)}n(!0),t("form").change((function(){n(!1)})),t(".button").click((function(){n(!1)})),t("button").click((function(){n(!1)})),t(".qltgm-color-field").wpColorPicker({change(){n(!1)},clear(){n(!1)}}),t(document).on("tinymce_change",(function(){n(!1)})),t(document).on("qltgm-enhanced-select",(function(){t(".qltgm-select2").filter(":not(.enhanced)").each((function(){t(this).select2({allowClear:!1,theme:"default",minimumResultsForSearch:-1}).addClass("enhanced")})),t(".qltgm-select2-search").filter(":not(.enhanced)").each((function(){const n=t(this),i=t(this).data("name"),s={allowClear:!0,ajax:{url:a,dataType:"json",data:t=>({name:i,per_page:10,q:t.term||0,selected:n.select2("val")||0,action:"qltgm_get_posts",nonce:e.nonce.qltgm_get_posts}),processResults(e){const a=[];return e&&t.each(e,(function(t,e){a.push({id:t,text:e})})),{results:a}},cache:!0},minimumInputLength:3};t(this).select2(s).addClass("enhanced")}))})).trigger("qltgm-enhanced-select"),t("select[name=box]").on("change",(()=>{t(".nav-tab.qltgm_box").toggleClass("hidden"),t(".nav-tab.qltgm_contacts").toggleClass("hidden");const e=t("#qltgm_button_form"),a=e.find("input[name=username]").closest("tr"),n=e.find("#qltgm_button_form_nonce").val();a.toggleClass("hidden"),e.trigger("qltgm.save",["qltgm_save_button",n])})),"no"===t("select[name=auto_open]").val()&&t("input[name=auto_delay_open]").closest("tr").addClass("hidden"),t("select[name=auto_open]").on("change",(()=>{t("input[name=auto_delay_open]").closest("tr").toggleClass("hidden")})),t(".qltgm-color-field").wpColorPicker(),t(document).on("click",".upload_image_button",(function(e){e.preventDefault();const a=wp.media.editor.send.attachment,n=t(this);return wp.media.editor.send.attachment=function(e,i){t(n).parent().prev().attr("src",i.url),t(n).prev().val(i.url).trigger("change"),wp.media.editor.send.attachment=a},wp.media.editor.open(n),!1})),t(document).on("click",".remove_image_button",(function(e){e.preventDefault();const a=t(this).parent().prev().attr("data-src");return t(this).parent().prev().attr("src",a),t(this).prev().prev().val("").trigger("change"),!1})),t(document).on("qltgm.save","form",(function(e,i,s){const o=t(e.currentTarget),l=o.find(".settings-save-status .spinner"),c=o.find(".settings-save-status .saved");return t.ajax({url:a,data:{action:i,nonce:s,form_data:o.serialize()},dataType:"json",type:"POST",beforeSend(){n(!0),l.addClass("is-active")},complete(){l.removeClass("is-active")},error(t){console.log(t)},success(t){c.addClass("is-active"),t.success?setTimeout((function(){c.removeClass("is-active")}),2e3):alert(t.data)}}),!1})),t(document).on("submit","#qltgm_button_form",(function(e){e.preventDefault();const a=t(this),n=a.find("#qltgm_button_form_nonce").val();a.trigger("qltgm.save",["qltgm_save_button",n])})),t(document).on("submit","#qltgm_box_form",(function(e){e.preventDefault();const a=t(this),n=a.find("#qltgm_box_form_nonce").val();a.trigger("qltgm.save",["qltgm_save_box",n])})),t(document).on("submit","#qltgm_display_form",(function(e){e.preventDefault();const a=t(this),n=a.find("#qltgm_display_form_nonce").val();a.trigger("qltgm.save",["qltgm_save_display",n])})),t(document).on("submit","#qltgm_scheme_form",(function(e){e.preventDefault();const a=t(this),n=a.find("#qltgm_scheme_form_nonce").val();a.trigger("qltgm.save",["qltgm_save_scheme",n])}))}(a()),window.wp.util,window.window.sortable,window.window.Backbone,function(t){let e,a=0;if(!window.qltgm_contact)return;const n=window._,i=window.Backbone,s=window.ajaxurl,{args:o,nonce:l,message:c}=qltgm_contact,d=function(){t("#qltgm_modal").removeClass("processing")},r=i.Model.extend({defaults:o}),m=i.View.extend({templates:{},initialize(t){this.templates.window=wp.template(t.subview)},render(){const t=this;return t.$el.html(t.templates.window(t.attributes)),this}}),u=i.View.extend({templates:{},initialize(t){this.templates.window=wp.template(t.subview)},render(){const t=this;return t.$el.html(t.templates.window(t.attributes)),this}}),h=i.View.extend({templates:{},initialize(t){this.templates.window=wp.template(t.subview)},render(){const t=this;return t.$el.html(t.templates.window(t.attributes)),this}}),p=i.View.extend({templates:{},initialize(t){this.templates.window=wp.template(t.subview)},render(){const t=this;return t.$el.html(t.templates.window(t.attributes)),this}}),g=i.View.extend({templates:{},initialize(t){this.templates.window=wp.template(t.subview)},render(){const t=this;return t.$el.html(t.templates.window(t.attributes)),this}}),w=i.View.extend({templates:{},initialize(t){this.templates.window=wp.template(t.subview)},render(){const t=this;return t.$el.html(t.templates.window(t.attributes)),this}}),v=i.View.extend({templates:{},initialize(t){this.templates.window=wp.template(t.subview)},render(){const t=this;return t.$el.html(t.templates.window(t.attributes)),this}}),b=i.View.extend({events:{"change input":"enable","change textarea":"enable","change select":"enable","click .media-modal-backdrop":"close","click .media-modal-close":"close","click .media-modal-prev":"edit","click .media-modal-next":"edit","change .media-modal-change":"change","change .media-modal-subview":"subview","submit .media-modal-form":"submit"},templates:{},initialize(){n.bindAll(this,"open","edit","change","subview","load","render","close","submit"),this.init(),this.open()},init(){this.templates.window=wp.template("qltgm-modal-window")},LoadTemplate1:()=>i.View.extend({templates:{},initialize(t){this.templates.window=wp.template(t.subview)},render(){const t=this;return t.$el.html(t.templates.window(t.attributes)),this}}),assign(t,e){t.setElement(this.$(e)).render()},render(){const t=this,e=this.$el.find("ul.wc-tabs li.active a").attr("href");t.$el.html(t.templates.window(t.model.attributes)),this.header=new m({subview:"subview-header",attributes:t.model.attributes}),this.footer=new u({subview:"subview-footer",attributes:t.model.attributes}),this.tabs=new h({subview:"subview-tabs",attributes:t.model.attributes}),this.contact=new p({subview:"subview-contact",attributes:t.model.attributes}),this.contact_chat=new g({subview:"subview-contact-chat",attributes:t.model.attributes}),this.info=new v({subview:"subview-contact-info",attributes:t.model.attributes}),this.visibility=new w({subview:"subview-visibility",attributes:t.model.attributes}),this.assign(this.header,"#panel-header"),this.assign(this.footer,"#panel-footer"),this.assign(this.tabs,"#panel-tabs"),this.assign(this.contact,"#panel-contact"),this.assign(this.contact_chat,"#subpanel-contact-chat"),this.assign(this.info,"#panel-info"),this.assign(this.visibility,"#panel-visibility"),n.delay((function(){t.$el.trigger("qltgm-enhanced-select"),t.$el.trigger("qltgm-tab-panels",e)}),100)},load(){const e=this;t("#qltgm_modal").addClass("processing"),t.ajax({url:s,data:{action:"qltgm_edit_contact",nonce:l.qltgm_edit_contact,contact_id:this.model.attributes.id},dataType:"json",type:"POST",beforeSend(){},complete(){d()},error(){alert("Error!")},success(t){t.success?(e.model.set(t.data),e.render()):alert(t.data)}})},edit(n){n.preventDefault();const i=this,s=t(n.target),o=parseInt(t("#qltgm_contacts_table tr[data-contact_id]").length);let l=parseInt(i.model.get("order"));a++,e&&clearTimeout(e),e=setTimeout((function(){l=s.hasClass("media-modal-next")?Math.min(l+a,o):Math.max(l-a,1),i.model.set({id:parseInt(t("#qltgm_contacts_table tr[data-contact_position="+l+"]").data("contact_id"))}),a=0,i.load()}),300)},open(){t("body").addClass("modal-open").append(this.$el),void 0!==this.model.attributes.id?this.load():n.delay((function(){d()}),100)},update(e){e.preventDefault();const a=t(e.target),n=a.attr("name");let i=a.val();"checkbox"===e.target.type&&(i=!0===a.prop("checked")?1:0),this.model.attributes[n]=i,this.model.changed[n]=i},change(t){t.preventDefault(),this.update(t)},subview(){this.contact_chat.render()},reload(){this.$el.find("#qltgm_modal").hasClass("reload")?location.reload():this.remove()},close(e){e.preventDefault(),this.undelegateEvents(),t(document).off("focusin"),this.$el.find("#qltgm_modal").addClass("reload"),this.reload(e)},enable(){t(".media-modal-submit").prop("disabled",!1)},submit(e){e.preventDefault();const a=this,n=a.$el.find("#qltgm_modal"),i=n.find(".attachment-details");return t.ajax({url:s,data:{action:"qltgm_save_contact",nonce:l.qltgm_save_contact,contact_id:a.model.attributes.id,contact_data:t("form",this.$el).serialize()},dataType:"json",type:"POST",beforeSend(){t(".media-modal-submit").prop("disabled",!0),i.addClass("save-waiting")},complete(){i.addClass("save-complete"),i.removeClass("save-waiting")},error(){alert("Error!")},success(t){t.success?void 0===a.model.attributes.id&&(n.addClass("reload"),a.reload(e),a.close(e)):alert(t.data)}}),!1}}),f=i.View.extend({initialize(e){const a=t(e.target).closest("[data-contact_id]").data("contact_id"),n=new r;n.set({id:a}),new b({model:n}).render()}});let _=!1;t(".qltgm_settings_edit").on("click",(function(t){t.preventDefault(),_||(new f(t),_=!0)})),t("#qltgm_contact_add").on("click",(function(t){t.preventDefault(),new f(t)})),t(".qltgm_settings_delete").on("click",(function(e){if(e.preventDefault(),!confirm(c.contact_confirm_delete))return!1;const a=t(e.target).closest("[data-contact_id]").data("contact_id"),n=t("#qltgm_delete_contact_nonce").val();t.ajax({url:s,data:{action:"qltgm_delete_contact",nonce_delete:n,contact_id:a},dataType:"json",type:"POST",beforeSend(){},complete(){},error(t){console.log(t)},success(t){t.data?location.reload():alert(t.data)}})})),t("table#qltgm_contacts_table tbody").sortable({items:"tr",cursor:"move",axis:"y",handle:"td.sort",scrollSensitivity:40,helper:(e,a)=>(a.children().each((function(){t(this).width(t(this).width())})),a.css("left","0"),a),start(t,e){e.item.css("background-color","#f6f6f6")},stop(t,e){e.item.removeAttr("style"),e.item.trigger("updateMoveButtons"),e.item.trigger("updateSaveButton")}}),t(document).on("updateSaveButton",(function(){t("#qltgm_contact_order").prop("disabled",!1)})),t(".wc-item-reorder-nav").find(".wc-move-up, .wc-move-down").on("click",(function(){const e=t(this),a=e.closest("tr");e.focus();const n=e.is(".wc-move-up"),i=e.is(".wc-move-down");if(n){const t=a.prev("tr");t&&t.length&&t.before(a)}else if(i){const t=a.next("tr");t&&t.length&&t.after(a)}e.focus(),e.closest("table").trigger("updateMoveButtons"),e.closest("table").trigger("updateSaveButton")})),t(".wc-item-reorder-nav").closest("table").on("updateMoveButtons",(function(){const e=t(this),a=t(this).find("tbody tr:last"),n=t(this).find("tbody tr:first");e.find(".wc-item-reorder-nav .wc-move-disabled").removeClass("wc-move-disabled").attr({tabindex:"0","aria-hidden":"false"}),n.find(".wc-item-reorder-nav .wc-move-up").addClass("wc-move-disabled").attr({tabindex:"-1","aria-hidden":"true"}),a.find(".wc-item-reorder-nav .wc-move-down").addClass("wc-move-disabled").attr({tabindex:"-1","aria-hidden":"true"})})),t("table#qltgm_contacts_table tbody").trigger("updateMoveButtons"),t(document).on("submit","#qltgm_contacts_form",(function(e){e.preventDefault();const a=t(this),n=a.find(".settings-save-status .spinner"),i=a.find(".settings-save-status .saved");return t.ajax({url:s,data:{action:"qltgm_save_contact_order",nonce:l.qltgm_save_contact_order,contact_data:a.serialize()},dataType:"json",type:"POST",beforeSend(){n.addClass("is-active")},complete(){n.removeClass("is-active")},error(t){console.log(t)},success(e){i.addClass("is-active"),t("#qltgm_contact_order").prop("disabled",!0),e.success?setTimeout((function(){i.removeClass("is-active")}),1500):alert(e.data)}}),!1})),t(document).on("qltgm-tab-panels",(function(e,a){const n=t(e.target).find("ul.qltgm-tabs"),i=n.find('a[href="'+a+'"]');n.show(),n.find("a").click((function(){e.preventDefault();const a=t(this).closest("div.panel-wrap");n.find("li",a).removeClass("active"),t(this).parent().addClass("active"),t("div.panel",a).hide(),t(t(this).attr("href")).show()})),i.length&&t(i.attr("href")).length?i.click():n.find("li.active").find("a").click()}))}(a())})();
(function(jQuery, mbrApp) {
    mbrApp.regExtension({
        name: "witsec-white-label",
        events: {
            load: function() {
                var a = this;
                a.addFilter("publishHTML", function(b) {
					var c = a.projectSettings["white-label"] || "";

					if (c) {
						b = b.replace(/^ *<meta name="generator".+>$/img, '')
						b = b.replace(/^ *<!-- Site made with.+-->$/img, '')
						b = b.replace(/^ *<section class="engine">.+<\/section>$/img, '')
					}

					return b
				});
                a.addFilter("additionalPageSettings", function(b) {
					var c = a.projectSettings["white-label"] || "";
					return b + [
							'<div class="form-group clearfix">\n<label class="col-md-3 control-label">White Label</label>\n<div class="togglebutton col-md-9">\n<label style="width: 100%;">',
							'<input type="checkbox" id="site-settings-white-label" name="white-label" ' + ("" != c ? "checked" : "") + '><span class="toggle" style="margin-top: -6px;"></span>', 
							"</label>\n</div>", 
							"</div>"
							].join("\n")
                })
            }
        }
    })
})(jQuery, mbrApp);
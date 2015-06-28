define([
	'underscore',
	'jquery',
	'storage',
	'classes/Extension',
	'bootstrap-tour'
], function(_, $, storage, Extension, Tour) {

	var welcomeTour = new Extension('welcomeTour', 'Welcome tour', false, true);

	var eventMgr;
	welcomeTour.onEventMgrCreated = function(eventMgrParam) {
		eventMgr = eventMgrParam;
	};

	welcomeTour.onReady = function() {
		function infoTooltip(btnSelector, title, placement) {
			var tooltip = $(btnSelector).tooltip({
				html: true,
				//container: $('.extension-preview-buttons'),
				placement: placement,
				trigger: 'manual',
				title: title
			}).tooltip('show').addClass('info-tooltip');
			tooltip.parent().addClass('info-tooltip-container');
			tooltip.one('click', function() {
				tooltip.tooltip('hide').removeClass('info-tooltip').parent().removeClass('info-tooltip-container');
			});
			setTimeout(function() {
				tooltip.tooltip('hide').removeClass('info-tooltip').parent().removeClass('info-tooltip-container');
			}, 30000);
		}

		var tour = new Tour({
			keyboard: false,
			storage: {
				getItem: function() {
				},
				setItem: function() {
				},
				removeItem: function() {
				}
			},
			onEnd: function() {
				storage.welcomeTour = 'done';
				infoTooltip('.drag-me', '拖动我!', 'left');
				infoTooltip('.layout-toggler-preview', '预览', 'right');
			},
			template: [
				'<div class="popover tour">',
				'   <div class="arrow"></div>',
				'   <h3 class="popover-title"></h3>',
				'   <div class="popover-content"></div>',
				'   <nav class="popover-navigation">',
				'       <button class="btn btn-primary" data-role="next">下一步</button>',
				'       <button class="btn btn-default" data-role="end">明白啦!</button>',
				'   </nav>',
				'</div>'
			].join("")
		});
		tour.addSteps([
			{
				element: '.navbar-inner',
				title: 'StackEdit 4 发布了!',
				content: [
					'<p>很高兴你能使用这款编辑器！StackEdit一直不断改进，希望你能喜欢它.</p>',
					'点击 <b>下一步</b> 看看都有哪些功能.'
				].join(""),
				placement: 'bottom'
			},
			{
				element: '.document-panel .toggle-button',
				title: '文档',
				content: [
					'<p>你可以通过<i class="icon-folder-open"></i> <b>文档面板</b> 管理你的本地文档.</p>',
					'<b>小贴士:</b> 使用 <kbd>Ctrl+[</kbd> 和 <kbd>Ctrl+]</kbd> 打开/关闭面板.'
				].join(""),
				placement: 'left',
				reflex: true
			},
			{
				element: '.menu-panel .toggle-button',
				title: '菜单',
				content: [
					'<p>你可以使用<i class="icon-provider-stackedit"></i> <b>菜单面板</b> 同步你的文档</p>',
					'<b>小贴士:</b> 通过 <i class="icon-provider-stackedit"></i> <b>菜单面板</b> 来访问各项设置.'
				].join(""),
				placement: 'right',
				reflex: true
			},
			{
				element: '.navbar-inner > .nav .button-open-discussion, .navbar .buttons-dropdown > .nav > .btn:not(:hidden)',
				title: '评论',
				content: [
					'<p>StackEdit 4新特性: <i class="icon-comment-alt"></i> 可通过<b>评论</b> 按钮创建讨论!</p>',
					'<b>小贴士:</b> 从菜单>设置>工具 中重新打开欢迎文档，可以查看到其他的新特性.'
				].join(""),
				placement: 'right',
				reflex: true
			},
			{
				element: '.navbar-inner',
				title: '享受写作的乐趣!',
				content: [
					'<p>亲，别忘了在<a target="_blank" href="https://chrome.google.com/webstore/detail/stackedit/iiooodelglhkcpgbajoejffhijaclcdg/reviews">Chrome Web Store</a>上给我们五星好评哦!</p>',
					'<a href="https://twitter.com/share" class="twitter-share-button" data-url="https://stackedit.io" data-text="Great #markdown editor!" data-via="stackedit" data-size="large"></a>'
				].join(""),
				placement: 'bottom',
				onShown: function() {
					eventMgr.onTweet();
				}
			}
		]);
		if(!_.has(storage, 'welcomeTour')) {
			tour.start();
		}
		$('.action-welcome-tour').click(function() {
			tour.restart();
		});
	};

	return welcomeTour;

});

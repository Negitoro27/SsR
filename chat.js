var BAAS = BAAS || {};

BAAS.cocoa = {
		init:function(){
				this.setParameters();
				this.bindEvent();
		},

		setParameters:function(){
			this.$name = $('#jsi-name');
			this.$textArea = $('#jsi-msg');
			this.$board = $('#jsi-board');
			this.$button = $('#jsi-button');
			this.$msgDom = $('<li>');

			//各自登録時に出たコードに書き換え。「chatRoom」は任意でok。複数の部屋を作りたい場合はここを動的にする。
			this.chatDataStore = new MilkCocoa('eggivck94jn.mlkcca.com').dataStore('chatRoom');
		},

		bindEvent:function(){
			var self = this;
			this.$button.on('click',function(){
					self.sendMsg();
			});

			//pushを監視
			this.chatDataStore.on('push',function(data){
					self.addText(data.value.user);
					self.addText(data.value.message);
			});

window.onload = () => {
  // 创建PixiJS应用实例
  let app = new PIXI.Application({
    width: 300,
    height: 300,
    backgroundColor: 0x1099bb
  });
  document.body.appendChild(app.view);

  // 创建文本样式
  const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fill: 'white'
  });

  // 创建文本
  const message = new PIXI.Text('Hello PixiJS!', style);
  message.x = app.renderer.width / 2;
  message.y = app.renderer.height / 2;
  message.anchor.set(0.5);

  // 添加模糊过滤器
  const blurFilter = new PIXI.filters.BlurFilter();
  message.filters = [blurFilter];

  // 设置混合模式
  message.blendMode = PIXI.BLEND_MODES.ADD;

  // 将文本添加到舞台
  app.stage.addChild(message);

  // 使文本可交互
  message.interactive = true;
  message.buttonMode = true;

  // 添加点击事件
  message.on('pointerdown', () => {
    // 点击时切换模糊效果
    blurFilter.blur = blurFilter.blur ? 0 : 10;
  });

  // 动画循环
  app.ticker.add((delta) => {
    // 旋转文本
    message.rotation += 0.01 * delta;
  });
}
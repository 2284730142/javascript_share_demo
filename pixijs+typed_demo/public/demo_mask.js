window.onload = () => {
  // 创建Pixi应用
  const app = new PIXI.Application({
    width: 300,         // 画布宽度
    height: 300,       // 画布高度
    backgroundColor: 0x000000,        // 背景颜色
    resolution: 1,
  });
  document.body.appendChild(app.view);

  // 加载图片
  const flowerTexture = PIXI.Texture.from('/1707804064633.jpg');
  const flower = new PIXI.Sprite(flowerTexture);

  /// 将图片精灵的锚点设置在中心
  // 设置心形图案的位置和缩放
  flower.x = app.screen.width / 2;
  flower.y = app.screen.height / 2;
  flower.anchor.set(0.5);
  flower.scale.set(1);

  app.stage.addChild(flower);

  // 创建一个圆形图形作为遮罩
  const circleMask = new PIXI.Graphics();
  circleMask.beginFill(0xFFFFFF);
  circleMask.drawCircle(app.screen.width / 2, app.screen.height / 2, 100);
  circleMask.endFill();

  // 设置遮罩
  flower.mask = circleMask;

  // 将遮罩添加到舞台
  app.stage.addChild(circleMask);

  // 添加旋转动画
  app.ticker.add((delta) => {
    // 每帧更新flower的旋转角度
    flower.rotation += 0.01 * delta;
  });
}
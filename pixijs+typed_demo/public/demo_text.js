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
      fill: 'white',
      stroke: '#ff3300',
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: '#000000',
      dropShadowBlur: 4,
      dropShadowAngle: Math.PI / 6,
      dropShadowDistance: 6,
    });

    // 创建文本
    const message = new PIXI.Text('点击我!', style);
    message.x = app.renderer.width / 2;
    message.y = app.renderer.height / 2;
    message.anchor.set(0.5);

    // 使文本可交互
    message.interactive = true;
    message.buttonMode = true;

    // 添加点击事件
    message.on('pointerdown', () => {
      // 这里是点击事件触发时执行的代码
      // 随机改变文本颜色
      message.style.fill = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    });

    // 将文本添加到舞台
    app.stage.addChild(message);
  }
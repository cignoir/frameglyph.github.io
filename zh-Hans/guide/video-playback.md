# 视频播放

![Video playback screen](/images/screenshots/playback.png)

Frameglyph 支持导入视频，并提供帧级别的精准审查功能。

## 导入视频

- 将视频文件拖放到应用程序窗口中。
- 或者使用菜单栏的 **文件 (File) > 导入视频... (Import Video...)**。

支持的格式：MP4、WebM，以及浏览器视频引擎支持的其他格式。

## 播放控制

| 操作 | 说明 |
|---|---|
| 播放 / 暂停 (Play / Pause) | 开始或停止播放 |
| 步进 (Step Forward) | 向前推进一帧 |
| 步退 (Step Backward) | 向后倒退一帧 |
| 跳转至开头 (Jump to Start) | 跳转到第一帧 |
| 跳转至结尾 (Jump to End) | 跳转到最后一帧 |
| 加速 (Speed Up) | 提高播放速度 |
| 减速 (Slow Down) | 降低播放速度 |
| 音频拖拽预览 (Audio Scrub) | 在逐帧步进时播放简短的音频片段 |

*（您可以在 **首选项 (Preferences) > 系统 (System)** 中将 **帧计数起点 (Frame Count Origin)** 配置为从 0 或从 1 开始。）*

## 视图设置

在 **视图 (View)** 菜单下提供以下选项，以自定义您的工作区：

- **总在最前 (Always on Top)**：使 Frameglyph 窗口始终保持在其他所有应用程序之上。
- **不透明度 (Opacity)**：调整窗口透明度，以便您可以看到底部的参考资料。

## 保存帧画面

要从当前视频捕获静止图像：
- 使用 **视频 (Video) > 保存当前帧... (Save Current Frame...)** 将截图保存到磁盘。
- 使用 **视频 (Video) > 复制帧到剪贴板 (Copy Frame to Clipboard)** 快速将当前帧粘贴到其他应用程序中。

## 循环播放

1. 在所需的起始帧处点击 **设置循环入点 (Set Loop In)**（或使用快捷键）。
2. 在所需的结束帧处点击 **设置循环出点 (Set Loop Out)**。
3. 使用 **切换循环播放 (Toggle Loop Playback)** 来重复播放所选范围。

*（或者，使用 **范围起始于播放头 (Range Start at Playhead)** 和 **范围结束于播放头 (Range End at Playhead)** 快捷键进行快速选择。）*

## 多视频布局

![Multi-video comparison in 2x1 layout](/images/screenshots/multi-layout.png)

Frameglyph 支持同时查看多个视频进行并排对比。使用浮动的 **布局面板 (Layout Panel)** 在布局之间切换。

| 布局 | 视频数量 | 说明 |
|---|---|---|
| **1x1** | 1 | 单个视频（默认） |
| **2x1** | 2 | 左右并排两个视频 |
| **1x2** | 2 | 上下堆叠两个视频 |
| **2x2** | 4 | 2x2 网格显示四个视频 |

- 从 **视图 (View) > 布局面板 (Layout Panel)** 启用该面板。
- 将视频拖放到每个槽位中，或单击空白区域进行导入。
- 布局会根据加载的视频数量自动切换。

请参阅[快捷键 (Keyboard Shortcuts)](./shortcuts) 获取完整的播放控制列表。

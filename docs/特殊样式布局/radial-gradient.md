import RadialGradientComponent from '../../src/components/radial-gradient';

## examples

<RadialGradientComponent/>

## source code
```css
.container {
    font-size: 24px;
    font-weight: bold;
    margin: 20px;
    padding: 10px;
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: center;
    position: relative;
    overflow: hidden;
}
.progress-bar {
        width: 100%;
        height: 100%;
        overflow: hidden;
        position: absolute;
        top: 0;
        left: 0;

    }

    .progress {
        height: 20px;
       	background-image: radial-gradient(circle, #000 1px, transparent 1px);
        background-size: 5px 5px;
    }
```

```html
<div class="container">
	<div class="progress-bar">
		<div class="progress" style="width: 50%"></div>
	</div>
</div>
```

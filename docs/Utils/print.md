import PrintComponent from '../../src/components/print';

## 打印

## examples

<PrintComponent/>

## source code

```jsx
import React, { useState } from 'react';

//分页
const pageBreak = document.createElement('div');
pageBreak.style.pageBreakBefore = 'always';

const PrintComponent = () => {
    const [isPageBreak, setIsPageBreak] = useState(false);

    const handlePrint = () => {
        //判断iframe是否存在，不存在则创建iframe
        let iframe = document.getElementById('print-iframe');

        const el = document.getElementById('printcontent');
        iframe = document.createElement('IFRAME');
        let doc = null;
        iframe.setAttribute('id', 'print-iframe');
        iframe.setAttribute(
            'style',
            'position:absolute;width:0px;height:0px;left:-500px;top:-500px;',
        );

        //分页
        if (isPageBreak) {
            pageBreak.innerHTML = '测试分页';
            el.appendChild(pageBreak);
        }

        document.body.appendChild(iframe);
        doc = iframe.contentWindow.document;
        //这里可以自定义样式
        doc.write('<style media="print">@page {size: auto;margin: 0mm;}</style>'); //解决出现页眉页脚和路径的问题
        doc.write('<div>' + el.innerHTML + '</div>');
        doc.close();
        iframe.contentWindow.focus();

        setTimeout(function () {
            iframe.contentWindow.print();
        }, 50); //解决第一次样式不生效的问题
        if (navigator.userAgent.indexOf('MSIE') > 0) {
            document.body.removeChild(iframe);
        }
    };

    const handleCheckBox = ({ target: { checked } }) => {
        setIsPageBreak(checked);
    };

    return (
        <div>
            <div>
                是否分页：
                <input type="checkbox" value={isPageBreak} onChange={handleCheckBox} />
            </div>
            <button type="submit" class="print" onClick={handlePrint}>
                print
            </button>

            <div id="printcontent" style={{ display: 'none' }}>
                这里可以自己填充打印内容
            </div>
        </div>
    );
};

export default PrintComponent;

```

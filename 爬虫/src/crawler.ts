// ts 直接引用 js 会有报错，不知道怎么用
// 解决方案：提供一个类型定义文件（翻译文件）
// ts  ->  .d.ts  ->  js
// 把别人提供的翻译文件安装上，ts 先去读取翻译文件，帮助理解 js 里边的内容
// 鼠标放到飘红的 superagent 上，就会提示怎么安装翻译文件
// import superagent from 'superagent';
// 因为之家的网站输出的是 GB2312 的编码，会出现乱码的情况，这边改用 Axios + iconv-lite 这两个库
import axios from 'Axios'
import * as iconv from 'iconv-lite'
import * as fs from 'fs'
import * as path from 'path'
import AutohomeAnalyzer from './autohomeAnalyzer'

export interface Analyzer {
    analyze:(html: string, filePath: string) => string;
}

class Crawler {
    private filePath = path.resolve(__dirname, '../data/cards.json');

    getRawHtml() {
        return axios.get(this.url, { responseType: 'arraybuffer' }).then((response) => {
            const str = iconv.decode(Buffer.from(response.data), 'gb2312');
            const html = iconv.encode(str, 'utf8').toString();
            return html
        })
    }

    private writeFile(content: string) {
        fs.writeFileSync(this.filePath, content)
    }

    async initSpider() {
        const html = await this.getRawHtml();
        const fileContent = this.analyzer.analyze(html, this.filePath)

        this.writeFile(fileContent)
    }

    constructor(private url: string, private analyzer: Analyzer) {
        this.initSpider()
    }
}

const url = `https://club.autohome.com.cn/hongren#pvareaid=3454622`;

const autohomeAnalyzer = new AutohomeAnalyzer();

new Crawler(url, autohomeAnalyzer)

import { PluginSettings } from "./settings";
import { Uploader } from "./uploader/uploader";
import COS from "cos-nodejs-sdk-v5/index"

export class TencentUploader implements Uploader {
    settings: PluginSettings;

    lastToken: string;
    tokenCreated: number;
    tokenExpires: number;
    cos: COS;

    constructor(settings: PluginSettings) {
        this.settings = settings;
        this.lastToken = "";
        this.tokenCreated = Date.now();
        this.tokenExpires = 7200;
        this.cos = new COS({
            SecretId: settings.accessKey,
            SecretKey: settings.accessSecretKey
        })
    }

    public async uploadFile(name: string, file: File): Promise<string> {
        console.log(file)
        console.log(name)
        const content = await file.arrayBuffer();

        return new Promise((resolve, reject) => {
            // this.cos.uploadFile(
            //     {
            //         FilePath: file.name,
            //         Bucket: this.settings.bucketName,
            //         Region: this.settings.region,
            //         Key: name
            //     }
            this.cos.putObject(
                {
                    Bucket: this.settings.bucketName,
                    Region: this.settings.region,
                    Key: name,
                    Body: Buffer.from(content)
                }
            ).then(data => {
                resolve('success')
            }).catch(err => {
                reject(err)
            })
        })
    }
}
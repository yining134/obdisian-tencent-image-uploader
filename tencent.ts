import { PluginSettings } from "./settings";
import COS from "cos-nodejs-sdk-v5/index"

export class TencentUploader {
    settings: PluginSettings;
    cos: COS;

    constructor(settings: PluginSettings) {
        this.settings = settings;
        this.cos = new COS({
            SecretId: settings.secretID,
            SecretKey: settings.secretKey
        })
    }

    public async uploadFile(name: string, file: File): Promise<string> {
        const content = await file.arrayBuffer();
        return new Promise((resolve, reject) => {
            this.cos.putObject(
                {
                    Bucket: this.settings.bucketName,
                    Region: this.settings.region,
                    Key: name,
                    Body: Buffer.from(content)
                }
            ).then(data => {
                resolve("success")
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}
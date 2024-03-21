import { App, PluginSettingTab, Setting, Notice } from "obsidian";
import QiniuImageUploader from "./main";
import { t } from "./lang/helpers";

export interface PluginSettings {
    accessKey: string;
    accessSecretKey: string;
    bucketName: string;
    domain: string;
    namePrefix: string;
    region: string;
    deleteSource: boolean;
}

export const DEFAULT_SETTINGS: PluginSettings = {
    accessKey: "",
    accessSecretKey: "",
    bucketName: "",
    domain: "",
    namePrefix: "",
    region: "",
    deleteSource: false,
};

export class SettingTab extends PluginSettingTab {
    plugin: QiniuImageUploader;

    constructor(app: App, plugin: QiniuImageUploader) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName(t("Access Key"))
            .setDesc(t("Access Key Desc"))
            .addText(text => text
                .setPlaceholder(t("Access Key Input"))
                .setValue(this.plugin.settings.accessKey)
                .onChange(async (value) => {
                    this.plugin.settings.accessKey = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("Access Secret Key"))
            .setDesc(t("Access Secret Key Desc"))
            .addText(text => text
                .setPlaceholder(t("Access Secret Key Input"))
                .setValue(this.plugin.settings.accessSecretKey)
                .onChange(async (value) => {
                    this.plugin.settings.accessSecretKey = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("Bucket Name"))
            .setDesc(t("Bucket Name Desc"))
            .addText(text => text
                .setPlaceholder(t("Bucket Name Input"))
                .setValue(this.plugin.settings.bucketName)
                .onChange(async (value) => {
                    this.plugin.settings.bucketName = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("Region"))
            .setDesc(t("Region Desc"))
            .addText(text => text
                .setPlaceholder(t("Bucket Name Input"))
                .setValue(this.plugin.settings.region)
                .onChange(async (value) => {
                    this.plugin.settings.region = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("Domain"))
            .setDesc(t("Domain Desc"))
            .addText(text => text
                .setPlaceholder(t("Domain Input"))
                .setValue(this.plugin.settings.domain)
                .onChange(async (value) => {
                    this.plugin.settings.domain = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("Name Prefix"))
            .setDesc(t("Name Prefix Desc"))
            .addText(text => text
                .setPlaceholder(t("Name Prefix Input"))
                .setValue(this.plugin.settings.namePrefix)
                .onChange(async (value) => {
                    this.plugin.settings.namePrefix = value;
                    await this.plugin.saveSettings();
                }));
    }
}

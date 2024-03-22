import { App, PluginSettingTab, Setting } from "obsidian";
import TencentImageUploader from "./main";
import { t } from "./lang/helpers";

export interface PluginSettings {
    secretID: string;
    secretKey: string;
    bucketName: string;
    domain: string;
    namePrefix: string;
    region: string;
    deleteSource: boolean;
}

export const DEFAULT_SETTINGS: PluginSettings = {
    secretID: "",
    secretKey: "",
    bucketName: "",
    domain: "",
    namePrefix: "",
    region: "",
    deleteSource: false,
};

export class SettingTab extends PluginSettingTab {
    plugin: TencentImageUploader;

    constructor(app: App, plugin: TencentImageUploader) {
        super(app, plugin);
        this.plugin = plugin;
    }

    display(): void {
        const { containerEl } = this;

        containerEl.empty();

        new Setting(containerEl)
            .setName(t("Secret ID"))
            .setDesc(t("Secret ID Desc"))
            .addText(text => text
                .setPlaceholder(t("Secret ID Input"))
                .setValue(this.plugin.settings.secretID)
                .onChange(async (value) => {
                    this.plugin.settings.secretID = value;
                    await this.plugin.saveSettings();
                }));

        new Setting(containerEl)
            .setName(t("Secret Key"))
            .setDesc(t("Secret Key Desc"))
            .addText(text => text
                .setPlaceholder(t("Secret Key Input"))
                .setValue(this.plugin.settings.secretKey)
                .onChange(async (value) => {
                    this.plugin.settings.secretKey = value;
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

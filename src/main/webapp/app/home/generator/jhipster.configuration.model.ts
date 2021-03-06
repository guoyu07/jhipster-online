/**
 * Copyright 2017-2018 the original author or authors from the JHipster Online project.
 *
 * This file is part of the JHipster Online project, see https://github.com/jhipster/jhipster-online
 * for more information.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export class JHipsterConfigurationModel {

    constructor(
        public applicationType: String,
        public gitHubOrganization: String,
        public baseName: String,
        public packageName: String,
        public serverPort: Number,
        public serviceDiscoveryType: any,
        public authenticationType: String,
        public uaaBaseName: String,
        public cacheProvider: String,
        public enableHibernateCache: Boolean,
        public websocket: any,
        public databaseType: String,
        public devDatabaseType: String,
        public prodDatabaseType: String,
        public searchEngine: any,
        public enableSwaggerCodegen: any,
        public messageBroker: any,
        public buildTool: String,
        public enableSocialSignIn: Boolean,
        public useSass: Boolean,
        public clientPackageManager: String,
        public testFrameworks: String[],
        public enableTranslation: Boolean,
        public nativeLanguage: String,
        public languages: String[],
        public clientFramework: String
    ) { }
}

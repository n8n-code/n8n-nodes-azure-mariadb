import { NodeConnectionTypes, type INodeType, type INodeTypeDescription } from 'n8n-workflow';


export class AzureMariadb implements INodeType {
        description: INodeTypeDescription = {
                displayName: 'Azure Mariadb',
                name: 'N8nDevAzureMariadb',
                icon: { light: 'file:./azure-mariadb.png', dark: 'file:./azure-mariadb.dark.png' },
                group: ['input'],
                version: 1,
                subtitle: '={{\$parameter["operation"] + ": " + \$parameter["resource"]}}',
                description: 'Azure management API enables CRUD operations for MariaDB servers, databases, firewall rules, VNET rules, logs, and configs.',
                defaults: { name: 'Azure Mariadb' },
                usableAsTool: true,
                inputs: [NodeConnectionTypes.Main],
                outputs: [NodeConnectionTypes.Main],
                credentials: [
                        {
                                name: 'N8nDevAzureMariadbApi',
                                required: true,
                        },
                ],
                requestDefaults: {
                        baseURL: '={{\$credentials.url}}',
                        headers: {
                                Accept: 'application/json',
                                'Content-Type': 'application/json',
                        },
                },
                properties: [
		{
			"displayName": "Resource",
			"name": "resource",
			"type": "options",
			"noDataExpression": true,
			"options": [],
			"default": ""
		},
		
                ],
        };
}

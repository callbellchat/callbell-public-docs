---
sidebar_position: 6
---

# Postman Collection

[Postman is a desktop application](https://www.postman.com/) that allows you to configure and intereact with HTTP-based APIs. Callbell REST API implements several endpoints that you can interact with. 

To utilize our Postman collection you need to:

1. copy the raw json file below:

<details>
<summary> Postman Collection raw JSON</summary>

```json
{
	"info": {
		"_postman_id": "72a77848-8404-4eba-a3b9-c508ef13939b",
		"name": "Callbell Public API (V1) Copy",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "25702438"
	},
	"item": [
		{
			"name": "CONTACTS API",
			"item": [
				{
					"name": "GET /contacts",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/contacts?page=1",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"contacts"
							],
							"query": [
								{
									"key": "source",
									"value": null,
									"description": "The integration type (e.g. whatsapp)",
									"disabled": true
								},
								{
									"key": "tags",
									"value": null,
									"description": "The matching tags, comma-separated (e.g. sales,lead). Tags are case-insentive.",
									"disabled": true
								},
								{
									"key": "page",
									"value": "1",
									"description": "The page of contacts. If not specified it will default to page 1."
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "GET /contacts/phone/:phone",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/contacts/phone/:phone",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"contacts",
								"phone",
								":phone"
							],
							"variable": [
								{
									"key": "phone",
									"value": "",
									"description": "The phone number of the contact"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "PATCH /contacts/:uuid",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"name\": \"John Doe +111\",\n    \"custom_fields\": {\n        \"a\": \"field\",\n    \"TWITTER\": \"@atwitteruser\",\n    \"LINKEDIN\": \"@alinkedin\"\n    },\n    \"tags\": [\"USA\"]\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/contacts/:uuid",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"contacts",
								":uuid"
							],
							"variable": [
								{
									"key": "uuid",
									"value": null,
									"description": "The UUID of the contact"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "POST /contacts",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"source\": \"whatsapp\",\n    \"identifier\": \"+1234567891232337\",\n    \"name\": \"John Doe +14\",\n    \"custom_fields\": {\n        \"TWITTE\": \"@doe_doe\",\n        \"SHIPPING ADDRES\": \"\",\n        \"gmail\": \"john@gmail.com\"\n    },\n    \"tags\": [\"USA\", \"France\", \"Test\", \"LATAM\", \"CIAO\", \"TAG\"]\n  }",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/contacts",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"contacts"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET /contacts/:uuid",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/contacts/:uuid",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"contacts",
								":uuid"
							],
							"variable": [
								{
									"key": "uuid",
									"value": null,
									"description": "The UUID of the contact"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "DELETE /contacts/:uuid",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/contacts/:uuid",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"contacts",
								":uuid"
							],
							"variable": [
								{
									"key": "uuid",
									"value": null,
									"description": "The UUID of the contact"
								}
							]
						}
					},
					"response": []
				}
			],
			"auth": {
				"type": "bearer",
				"bearer": [
					{
						"key": "token",
						"value": "{{CALLBELL_TOKEN}}",
						"type": "string"
					}
				]
			},
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				},
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				}
			]
		},
		{
			"name": "TEMPLATES API",
			"item": [
				{
					"name": "GET /templates",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/templates",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"templates"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET /templates/:uuid",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/templates/:uuid",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"templates",
								":uuid"
							],
							"variable": [
								{
									"key": "uuid",
									"value": null,
									"description": "The UUID of the template"
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "PATCH /templates/:uuid",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"title\": \"Template title\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/templates/:uuid",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"templates",
								":uuid"
							],
							"variable": [
								{
									"key": "uuid",
									"value": null
								}
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "AUTH API",
			"item": [
				{
					"name": "GET /auth/me",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/auth/me",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"auth",
								"me"
							]
						}
					},
					"response": []
				}
			]
		},
		{
			"name": "MESSAGES API",
			"item": [
				{
					"name": "GET /messages/status/:uuid",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/messages/status/:uuid",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"messages",
								"status",
								":uuid"
							],
							"variable": [
								{
									"key": "uuid",
									"value": null,
									"description": "Identifier of the message which was sent through API."
								}
							]
						}
					},
					"response": []
				},
				{
					"name": "POST /messages/send",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{CALLBELL_TOKEN}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n\t\"from\": \"whatsapp\",\n\t\"to\": \"+509840596973\",\n\t\"type\": \"text\",\n\t\"content\": {\n\t\t\"text\": \"Hi\",\n        \"url\": \"https://www.buildquickbots.com/whatsapp/media/sample/jpg/sample01.jpg\"\n\t},\n    \"template_uuid\": \"d980fb66fd5043d3bce1aa06ba044342\",\n    \"optin_contact\": true\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/messages/send",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"messages",
								"send"
							]
						}
					},
					"response": []
				}
			],
			"auth": {
				"type": "bearer",
				"bearer": [
					{
						"key": "token",
						"value": "{{CALLBELL_TOKEN}}",
						"type": "string"
					}
				]
			},
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				},
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				}
			]
		},
		{
			"name": "WEBHOOKS API",
			"item": [
				{
					"name": "POST /webhooks/subscribe",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"url\": \"https://my-app.com/my-webhook-endpoint\",\n    \"subscriptions\": [\"message_created\", \"contact_created\"]\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/webhooks/subscribe",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"webhooks",
								"subscribe"
							]
						}
					},
					"response": []
				},
				{
					"name": "DELETE /webhooks/unsubscribe",
					"request": {
						"method": "DELETE",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/webhooks/unsubscribe",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"webhooks",
								"unsubscribe"
							]
						}
					},
					"response": []
				},
				{
					"name": "GET /webhooks/events",
					"request": {
						"method": "GET",
						"header": [],
						"url": {
							"raw": "{{CALLBELL_PUBLIC_API}}/webhooks/events?page=1",
							"host": [
								"{{CALLBELL_PUBLIC_API}}"
							],
							"path": [
								"webhooks",
								"events"
							],
							"query": [
								{
									"key": "status",
									"value": null,
									"description": "The event status (failed, success)",
									"disabled": true
								},
								{
									"key": "page",
									"value": "1",
									"description": "The page number"
								},
								{
									"key": "items",
									"value": null,
									"description": "The number of items per page",
									"disabled": true
								},
								{
									"key": "subscriptions",
									"value": null,
									"description": "Comma separated values of the events to subscribe on this webhook (e.g message_created)",
									"disabled": true
								}
							]
						}
					},
					"response": []
				}
			],
			"auth": {
				"type": "bearer",
				"bearer": [
					{
						"key": "token",
						"value": "{{CALLBELL_TOKEN}}",
						"type": "string"
					}
				]
			},
			"event": [
				{
					"listen": "prerequest",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				},
				{
					"listen": "test",
					"script": {
						"type": "text/javascript",
						"exec": [
							""
						]
					}
				}
			]
		}
	],
	"auth": {
		"type": "bearer",
		"bearer": [
			{
				"key": "token",
				"value": "",
				"type": "string"
			}
		]
	},
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "CALLBELL_TOKEN",
			"value": "yourtoken.here"
		},
		{
			"key": "CALLBELL_PUBLIC_API",
			"value": "https://api.callbell.eu/v1"
		}
	]
}

```
</details>

2. With your Postman open, click in the `import` button on the left sidebar.
3. Choose `Raw File` on the top bar.
4. Paste the Json file you copied in the step `1`.

Now that you have imported the collection, remember to configure the `CALLBELL_TOKEN` variable with your API Token.

If you are new to Postman you can also learn more about it:

- [Postman: Introduction](https://learning.postman.com/docs/getting-started/introduction/)
- [Postman: Using variables](https://learning.postman.com/docs/sending-requests/variables/)
- [Postman: Importing and exporting data](https://learning.postman.com/docs/getting-started/importing-and-exporting-data/)

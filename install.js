module.exports = async function ({ client, space, environment }) {
    const fields = [
        {
            "id": "title",
            "name": "title",
            "type": "Symbol",
            "localized": false,
            "required": true,
            "validations": [],
            "disabled": false,
            "omitted": false
        },
        {
            "id": "images",
            "name": "images",
            "type": "Array",
            "localized": false,
            "required": false,
            "validations": [],
            "disabled": false,
            "omitted": false,
            "items": {
                "type": "Link",
                "validations": [
                    {
                        "linkMimetypeGroup": [
                            "image"
                        ]
                    }
                ],
                "linkType": "Asset"
            }
        }
    ];

    const module = {
        name: 'Module: Gallery',
        description: '',
        displayField: 'title',
        fields: fields,
        sys: {
            id: 'ModuleGallery',
        }
    };

    const contentType = await environment.createContentTypeWithId('ModuleGallery', module);
    await contentType.publish();
};
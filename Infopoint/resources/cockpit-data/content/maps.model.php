<?php
return [
    'name' => 'maps',
    'label' => 'Lagepläne',
    'info' => 'Lagepläne für verschiedene Stockwerke',
    'type' => 'collection',
    'fields' => [
        [
            'name' => 'floor',
            'type' => 'text',
            'label' => 'Stockwerk-Code',
            'info' => 'z.B. OG1, EG, KE, OG2',
            'required' => true
        ],
        [
            'name' => 'label',
            'type' => 'text',
            'label' => 'Anzeigename',
            'info' => 'z.B. 1. Stock, Erdgeschoss, Keller'
        ],
        [
            'name' => 'image',
            'type' => 'asset',
            'label' => 'Lageplan-Bild'
        ],
        [
            'name' => 'sortOrder',
            'type' => 'number',
            'label' => 'Sortierung',
            'default' => 0
        ]
    ],
    'preview' => ['floor', 'label'],
    'sortable' => true
];

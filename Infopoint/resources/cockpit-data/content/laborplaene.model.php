<?php
/**
 * Labor-Stundenpläne Collection
 * 
 * Jede Klasse kann mehrere Bilder haben.
 * 
 * Felder:
 * - className: Name der Klasse (z.B. "5AHWIN")
 * - description: Optionale Beschreibung
 * - images: Array von Bildern (Assets)
 * - sortOrder: Sortierreihenfolge
 */

return [
    'name' => 'laborplaene',
    'label' => 'Labor-Stundenpläne',
    'group' => 'Stundenpläne',
    'fields' => [
        [
            'name' => 'className',
            'type' => 'text',
            'label' => 'Klassenname',
            'required' => true,
            'opts' => [
                'placeholder' => 'z.B. 5AHWIN'
            ]
        ],
        [
            'name' => 'description',
            'type' => 'text',
            'label' => 'Beschreibung',
            'required' => false,
            'opts' => [
                'placeholder' => 'Optionale Beschreibung'
            ]
        ],
        [
            'name' => 'images',
            'type' => 'asset',
            'label' => 'Stundenplan-Bilder',
            'required' => false,
            'opts' => [
                'multiple' => true
            ]
        ],
        [
            'name' => 'sortOrder',
            'type' => 'number',
            'label' => 'Sortierung',
            'default' => 0
        ]
    ],
    'preview' => ['className', 'description'],
    'sortable' => true
];

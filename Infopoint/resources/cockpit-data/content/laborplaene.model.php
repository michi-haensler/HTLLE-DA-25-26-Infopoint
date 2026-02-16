<?php
/**
 * Labor-Stundenpläne Collection
 * 
 * Jede Klasse kann mehrere Bilder haben.
 */

return [
    'name' => 'laborplaene',
    'label' => 'Labor-Stundenpläne',
    'info' => 'Stundenpläne für Labor-Klassen mit Bildern',
    'type' => 'collection',
    'fields' => [
        0 => [
            'name' => 'className',
            'type' => 'text',
            'label' => 'Klassenname',
            'info' => 'z.B. 5AHWIN, 4BHITM',
            'group' => '',
            'i18n' => false,
            'required' => true,
            'multiple' => false,
            'meta' => [],
            'opts' => [
                'multiline' => false,
                'showCount' => true,
                'readonly' => false,
                'placeholder' => 'z.B. 5AHWIN',
                'minlength' => NULL,
                'maxlength' => NULL,
            ],
        ],
        1 => [
            'name' => 'description',
            'type' => 'text',
            'label' => 'Beschreibung',
            'info' => 'Optionale Beschreibung des Stundenplans',
            'group' => '',
            'i18n' => false,
            'required' => false,
            'multiple' => false,
            'meta' => [],
            'opts' => [
                'multiline' => true,
                'showCount' => true,
                'placeholder' => 'Optionale Beschreibung',
            ],
        ],
        2 => [
            'name' => 'images',
            'type' => 'asset',
            'label' => 'Stundenplan-Bilder',
            'info' => 'Ein oder mehrere Bilder des Stundenplans',
            'group' => '',
            'i18n' => false,
            'required' => false,
            'multiple' => true,
            'meta' => [],
            'opts' => [],
        ],
        3 => [
            'name' => 'sortOrder',
            'type' => 'number',
            'label' => 'Sortierung',
            'info' => 'Reihenfolge in der Anzeige',
            'group' => '',
            'i18n' => false,
            'required' => false,
            'multiple' => false,
            'meta' => [],
            'opts' => [],
        ],
    ],
    'preview' => ['className', 'description'],
    'sortable' => true,
    'group' => '',
    'meta' => NULL,
    '_created' => 1763400000,
    '_modified' => 1763400000,
    'color' => NULL,
    'revisions' => false,
];

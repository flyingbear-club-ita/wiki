module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Wiki',
      items: [
        'primi-passi',
        'calibrazioni',
        {
          type: 'category',
          label: 'Firmware',
          items: [
            'firmware/firmware_stock',
          ],
        },
        {
          type: 'category',
          label: 'Slicer',
          items: ['slicer/slicer', {
            type: 'category',
            label: 'Cura',
            items: [
              'slicer/cura/cura',
              'slicer/cura/cura_plugins',
              'slicer/cura/impostazioni_cura',
              'slicer/cura/mkswifiPlugin', 
              'slicer/cura/curaTempTower'
            ],
          },
          {
            type: 'category',
            label: 'Ideamaker',
            items: ['slicer/ideamaker/ideamaker','slicer/ideamaker/ideamakerTempTower'],
          },
          ],
        },
        {
          type: 'category',
          label: '3D Printing in generale',
          items: ['3dprinting/flusso',],
        },
        'errori',
        'manuale',
        {
          type: 'category',
          label: 'Raspberry Pi',
          items: [
            'raspberry/introduzione', 
            'raspberry/installare_raspbian', 
            'raspberry/configurare_la_ghost',
            'raspberry/multiboot',
            'raspberry/octodash',
            'raspberry/plugins',
            'raspberry/octo_docker',
          ],
        },
        {
          type: 'category',
          label: 'Marlin',
          items: [
            'marlin/firmware_compilato',
          ],
        },
      ],
    },
  ],
};

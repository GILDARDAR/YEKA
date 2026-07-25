import os
import re

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\prendas\PrendaModal.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
import_stmt = "import { ServicioModal } from '../catalogo/ServicioModal';\n"
content = content.replace("import { catalogoService } from '../catalogo/catalogo.service';", 
                          "import { catalogoService } from '../catalogo/catalogo.service';\n" + import_stmt)

# Remove the state variables except the bool
start_idx = content.find('  const [showNuevoServicioModal, setShowNuevoServicioModal] = useState(false);')
end_idx = content.find('  // Service Row State')

if start_idx != -1 and end_idx != -1:
    content = content[:start_idx] + '  const [showNuevoServicioModal, setShowNuevoServicioModal] = useState(false);\n\n' + content[end_idx:]


# Replace the modal
modal_start = content.find('    {/* MINI-MODAL: Nuevo Servicio (Simplificado) */}')
modal_end = content.find('    </>', modal_start)

replacement_modal = '''    <ServicioModal
      isOpen={showNuevoServicioModal}
      onClose={() => setShowNuevoServicioModal(false)}
      onSaved={(created) => {
        setCatalogoServicios(prev => [...prev, created]);
        setServicioSeleccionado(created.id.toString());
        setBusquedaServicio('');
        setMedidaEntregada('');
        setObservacionesServicio('');
      }}
    />
'''
if modal_start != -1 and modal_end != -1:
    content = content[:modal_start] + replacement_modal + content[modal_end:]

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

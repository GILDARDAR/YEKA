import sys

path = r'c:\Users\gilda\PROYECTOS\YEKA\frontend\src\modules\dashboard\DashboardTallerPage.tsx'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# Add import
import_statement = "import { TipoPrendaSelectorModal } from '../prendas/TipoPrendaSelectorModal';"
if "TipoPrendaSelectorModal" not in content:
    content = content.replace("import { PrendaModal } from '../prendas/PrendaModal';", "import { PrendaModal } from '../prendas/PrendaModal';\n" + import_statement)

# Add state
if "isTipoSelectorOpen" not in content:
    state_statement = "  const [isTipoSelectorOpen, setIsTipoSelectorOpen] = useState(false);\n  const [selectedTipoId, setSelectedTipoId] = useState<number | undefined>(undefined);"
    content = content.replace("  const [isPrendaModalOpen, setIsPrendaModalOpen] = useState(false);", "  const [isPrendaModalOpen, setIsPrendaModalOpen] = useState(false);\n" + state_statement)

# Update handleOpenAddPrenda
old_open_func = '''  const handleOpenAddPrenda = async () => {
    await ensureDraftFactura();
    setPrendaToEdit(null);
    setIsPrendaModalOpen(true);
  };'''

new_open_func = '''  const handleOpenAddPrenda = async () => {
    await ensureDraftFactura();
    setPrendaToEdit(null);
    setSelectedTipoId(undefined);
    setIsTipoSelectorOpen(true);
  };

  const handleTipoSelected = (tipoId: number) => {
    setSelectedTipoId(tipoId);
    setIsTipoSelectorOpen(false);
    setIsPrendaModalOpen(true);
  };'''

if old_open_func in content:
    content = content.replace(old_open_func, new_open_func)

# Insert the modal rendering
modal_code = '''      {isTipoSelectorOpen && (
        <TipoPrendaSelectorModal
          tiposPrenda={tiposPrenda}
          onSelect={handleTipoSelected}
          onClose={() => setIsTipoSelectorOpen(false)}
        />
      )}'''

if "TipoPrendaSelectorModal" not in content.split("return (")[1]:
    content = content.replace('{isPrendaModalOpen && (', modal_code + '\n\n      {isPrendaModalOpen && (')

# Also, pass initialTipoPrendaId to PrendaModal
if "initialTipoPrendaId={selectedTipoId}" not in content:
    content = content.replace(
        '          onSaved={refreshDraftInvoice}',
        '          onSaved={refreshDraftInvoice}\n          initialTipoPrendaId={selectedTipoId}'
    )

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)
print('DashboardTallerPage updated')

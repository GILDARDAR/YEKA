// Tipos compartidos que reflejan los DTOs del backend YEKA ERP

export type Rol = 'ADMIN' | 'RECEPCION' | 'TALLER';
export type EstadoPago = 'PENDIENTE' | 'PARCIAL' | 'PAGADO' | 'ANULADO';
export type EstadoPrenda = 'RECIBIDA' | 'PENDIENTE_VALORACION' | 'EN_PRODUCCION' | 'ESPERANDO_PRUEBA' | 'PENDIENTE_RECOGIDA' | 'ENTREGADA' | 'PROPIEDAD_TALLER';
export type MetodoPago = 'EFECTIVO' | 'TARJETA' | 'TRANSFERENCIA' | 'BIZUM';
export type TipoJornada = 'ENTRADA' | 'SALIDA';
export type TipoFactor = 'PORCENTAJE_SOBRE_PRECIO' | 'FIJO_POR_SERVICIO' | 'MENSUAL' | 'ANUAL' | 'DIARIO';

// ─── Auth ──────────────────────────────────────────────────────────
export interface AuthUser {
  id: number;
  email: string;
  nombre: string;
  rol: Rol;
  sedeId: number;
}

export interface LoginResponse {
  message: string;
  token: string;
  user: AuthUser;
}

// ─── Sede ──────────────────────────────────────────────────────────
export interface Sede {
  id: number;
  codigoSede: string;
  nombre: string;
  direccion: string | null;
  capacidadDiariaMax: number;
  activa: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateSedeDto {
  codigoSede: string;
  nombre: string;
  direccion?: string;
  capacidadDiariaMax?: number;
}

export interface UpdateSedeDto {
  codigoSede?: string;
  nombre?: string;
  direccion?: string;
  capacidadDiariaMax?: number;
  activa?: boolean;
}

export interface CapacidadResponse {
  sedeId: number;
  fecha: string;
  capacidadDiariaMax: number | null;
  usado: number;
  disponible: number | null;
  porcentaje: number | null;
}

// ─── Usuario ────────────────────────────────────────────────────────
export interface Usuario {
  id: number;
  sedeId: number;
  nombre: string;
  dni: string | null;
  telefono: string | null;
  email: string;
  rol: Rol;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateUsuarioDto {
  sedeId: number;
  nombre: string;
  dni?: string;
  telefono?: string;
  email: string;
  password: string;
  pinAcceso?: string;
  rol: Rol;
}

export interface UpdateUsuarioDto {
  sedeId?: number;
  nombre?: string;
  dni?: string;
  telefono?: string;
  email?: string;
  password?: string;
  pinAcceso?: string;
  rol?: Rol;
  activo?: boolean;
}

// ─── Cliente ────────────────────────────────────────────────────────
export interface Cliente {
  id: number;
  sedeOrigenId: number;
  nombre: string;
  dni: string | null;
  celular: string | null;
  email: string | null;
  nivelPremium: number;
  tallasMedidas: Record<string, unknown> | null;
  preferenciasHistorial: Record<string, unknown> | null;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
  facturasCount?: number;
}

export interface CreateClienteDto {
  sedeOrigenId: number;
  nombre: string;
  dni?: string;
  celular?: string;
  email?: string;
  tallasMedidas?: Record<string, unknown>;
  preferenciasHistorial?: Record<string, unknown>;
}

export interface UpdateClienteDto {
  sedeOrigenId?: number;
  nombre?: string;
  dni?: string;
  celular?: string;
  email?: string;
  tallasMedidas?: Record<string, unknown>;
  preferenciasHistorial?: Record<string, unknown>;
  activo?: boolean;
}

// ─── Tipo Prenda ───────────────────────────────────────────────────
export interface TipoPrendaMaterial {
  id: number;
  descripcion: string;
  activo: boolean;
}

export interface TipoPrenda {
  id: number;
  nombre: string;
  descripcion: string | null;
  porcentajeDificultad: number;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
  materiales?: TipoPrendaMaterial[];
}

export interface CreateTipoPrendaDto {
  nombre: string;
  descripcion?: string;
  porcentajeDificultad?: number;
  activo?: boolean;
  materialesIds?: number[];
}

export interface UpdateTipoPrendaDto {
  nombre?: string;
  descripcion?: string;
  porcentajeDificultad?: number;
  activo?: boolean;
  materialesIds?: number[];
}

// ─── Tipo Urgencia ──────────────────────────────────────────────────
export interface TipoUrgencia {
  id: number;
  nombre: string;
  porcentajeRecargo: string;
  activo: boolean;
}

// ─── Factores Cobro ─────────────────────────────────────────────────
export interface FactorCobro {
  id: number;
  categoriaId: number;
  nombre: string;
  valor: string;
  tipo: TipoFactor;
  activo: boolean;
  createdAt: string;
}

export interface CategoriaFactorCobro {
  id: number;
  nombre: string;
  activa: boolean;
  createdAt: string;
  factores?: FactorCobro[];
}

// ─── Catálogo Servicio ──────────────────────────────────────────────
export interface CatalogoServicio {
  id: number;
  nombre: string;
  categoria: string;
  tipoEspecifico: string;
  medidaBase: number;
  tiempoBase: number;
  activo: boolean;
  categoriasFactores: { id: number; nombre: string }[];
  materiales?: { id: number; descripcion: string }[];
  tiposArreglo?: { id: number; descripcion: string }[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateCatalogoServicioDto {
  nombre: string;
  categoria: string;
  tipoEspecifico: string;
  medidaBase?: number;
  tiempoBase?: number;
  categoriasFactoresIds?: number[];
  materialesIds?: number[];
  tiposArregloIds?: number[];
}

export interface UpdateCatalogoServicioDto {
  nombre?: string;
  categoria?: string;
  tipoEspecifico?: string;
  medidaBase?: number;
  tiempoBase?: number;
  activo?: boolean;
  categoriasFactoresIds?: number[];
  materialesIds?: number[];
  tiposArregloIds?: number[];
}

// ─── Abono ──────────────────────────────────────────────────────────
export interface Abono {
  id: number;
  facturaId: number;
  monto: number;
  metodoPago: MetodoPago;
  notas: string | null;
  fecha: string;
}

// ─── Prenda ─────────────────────────────────────────────────────────
export interface Prenda {
  id: number;
  facturaId: number;
  codigoQR: string;
  tipoPrendaId: number;
  talla: string;
  color: string;
  marca: string | null;
  estadoActual: EstadoPrenda;
  fechaCompromiso: string | null;
  esLujo: boolean;
  fotoUrl: string | null;
  usuarioTallerId: number | null;
  fechaUltimaNotificacion: string | null;
  notas: string | null;
  createdAt: string;
  updatedAt: string;
  tipoUrgenciaId: number | null;
  tipoUrgencia?: TipoUrgencia | null;
  porcentajeAtencionAplicado?: string | null;

  servicios?: PrendaServicio[];
  factura?: Factura;
}

export interface PrendaServicio {
  id: number;
  prendaId: number;
  servicioId: number;
  medidaEntregada: string | null;
  tiempoCalculado: number | null;
  valorPorTiempo: string | null;
  valorFactoresCobro: string | null;
  precioBruto: string | null;
  precioFinal: string;
  observaciones: string | null;
  detallesCalculo?: any;
  createdAt: string;

  servicio?: CatalogoServicio;
}

export interface CreatePrendaDto {
  facturaId: number;
  tipoPrendaId: number;
  tipoUrgenciaId?: number | null;
  talla: string;
  color: string;
  marca?: string;
  esLujo?: boolean;
  notas?: string;
}

export interface UpdatePrendaDto {
  tipoPrendaId?: number;
  tipoUrgenciaId?: number | null;
  talla?: string;
  color?: string;
  marca?: string;
  esLujo?: boolean;
  notas?: string;
}

export interface AsignarServicioDto {
  servicioId: number;
  medidaEntregada?: number;
  observaciones?: string;
}

export interface CambiarEstadoDto {
  nuevoEstado: EstadoPrenda;
  usuarioTallerId?: number | null;
}

// ─── Factura ─────────────────────────────────────────────────────────
export interface Factura {
  id: number;
  numero: string;
  clienteId: number | null;
  usuarioCreadorId: number;
  sedeId: number;
  subtotal: number;
  impuestosJson: { iva: number; monto: number } | null;
  total: number;
  estadoPago: EstadoPago;
  notas: string | null;
  createdAt: string;
  updatedAt: string;
  abonos?: Abono[];
  prendas?: Prenda[];
  cliente?: Cliente;
}

export interface CreateFacturaDto {
  clienteId?: number;
  sedeId: number;
  notas?: string;
}

export interface AddAbonoDto {
  monto: number;
  metodoPago: MetodoPago;
  notas?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────
export interface PaginatedResult<T> {
  data: T[];
  total: number;
}

export interface ApiError {
  message: string;
  statusCode: number;
}

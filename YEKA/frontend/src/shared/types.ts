// Tipos compartidos que reflejan los DTOs del backend YEKA ERP

export type Rol = 'ADMIN' | 'RECEPCION' | 'TALLER';
export type EstadoPago = 'PENDIENTE' | 'PARCIAL' | 'PAGADO' | 'ANULADO';
export type EstadoPrenda = 'RECIBIDA' | 'PENDIENTE_VALORACION' | 'EN_PRODUCCION' | 'ESPERANDO_PRUEBA' | 'PENDIENTE_RECOGIDA' | 'ENTREGADA' | 'PROPIEDAD_TALLER';
export type TipoExpress = 'NORMAL' | 'EXPRESS_48H' | 'EXPRESS_24H';
export type MetodoPago = 'EFECTIVO' | 'TARJETA' | 'TRANSFERENCIA' | 'BIZUM';
export type TipoJornada = 'ENTRADA' | 'SALIDA';

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
export interface TipoPrenda {
  id: number;
  nombre: string;
  descripcion: string | null;
  activo: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CreateTipoPrendaDto {
  nombre: string;
  descripcion?: string;
  activo?: boolean;
}

export interface UpdateTipoPrendaDto {
  nombre?: string;
  descripcion?: string;
  activo?: boolean;
}

// ─── Precio Servicio ────────────────────────────────────────────────
export interface PrecioServicio {
  id?: number;
  tipoPrendaId: number;
  medidaBase: string;
  precioBase: string;
  medidaExtra: string;
  precioExtra: string;
}

// ─── Catálogo Servicio ──────────────────────────────────────────────
export interface CatalogoServicio {
  id: number;
  categoria: string;
  tipoEspecifico: string;
  pesoPuntos: number;
  activo: boolean;
  preciosPorPrenda: PrecioServicio[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateCatalogoServicioDto {
  categoria: string;
  tipoEspecifico: string;
  pesoPuntos: number;
  preciosPorPrenda: {
    tipoPrendaId: number;
    medidaBase: number;
    precioBase: number;
    medidaExtra: number;
    precioExtra: number;
  }[];
}

export interface UpdateCatalogoServicioDto {
  categoria?: string;
  tipoEspecifico?: string;
  pesoPuntos?: number;
  activo?: boolean;
  preciosPorPrenda?: {
    tipoPrendaId: number;
    medidaBase: number;
    precioBase: number;
    medidaExtra: number;
    precioExtra: number;
  }[];
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
  tipoExpress: TipoExpress;

  servicios?: PrendaServicio[];
  factura?: Factura;
}

export interface PrendaServicio {
  id: number;
  prendaId: number;
  servicioId: number;
  medidaEntregada: string | null;
  tipoExpress: TipoExpress;
  precioFinal: string;
  observaciones?: string | null;
  createdAt: string;

  servicio?: CatalogoServicio;
}

export interface CreatePrendaDto {
  facturaId: number;
  tipoPrendaId: number;
  talla: string;
  color: string;
  marca?: string;
  esLujo?: boolean;
  notas?: string;
}

export interface AsignarServicioDto {
  servicioId: number;
  medidaEntregada?: number;
  tipoExpress: TipoExpress;
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

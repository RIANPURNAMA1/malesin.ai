interface Props {
  connected: boolean
}

export default function TikTokConnectionStatus({ connected }: Props) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${
        connected
          ? 'bg-green-50 text-green-700 ring-1 ring-green-200'
          : 'bg-slate-50 text-slate-500 ring-1 ring-slate-200'
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          connected ? 'bg-green-500' : 'bg-slate-400'
        }`}
      />
      {connected ? 'Tersambung' : 'Belum Tersambung'}
    </span>
  )
}

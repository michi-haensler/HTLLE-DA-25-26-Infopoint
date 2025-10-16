export default function ErrorBanner({ message }: { message: string }) {
    return (
      <div style={{
        background: '#2a1313',
        border: '1px solid #582323',
        color: '#ffb4b4',
        padding: 12,
        borderRadius: 10
      }}>
        {message}
      </div>
    )
  }
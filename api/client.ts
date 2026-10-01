const API_URL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api/v1";

export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message: string;
}

export class ApiClient {
  private static async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${API_URL}${endpoint}`;

    try {
      const response = await fetch(url, {
        ...options,
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "An error occurred",
        };
      }

      return {
        success: true,
        data: data.data ?? data.user ?? data,
        message: data.message || "Success",
      };
    } catch (error) {
      return {
        success: false,
        message:
          error instanceof Error ? error.message : "Network error",
      };
    }
  }

  static get<T>(endpoint: string, options: RequestInit = {}) {
    return this.request<T>(endpoint, {
      ...options,
      method: "GET",
    });
  }

  static post<T>(
    endpoint: string,
    body?: unknown,
    options: RequestInit = {}
  ) {
    return this.request<T>(endpoint, {
      ...options,
      method: "POST",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  }

  static async postForm<T>(
    endpoint: string,
    formData: FormData
  ): Promise<ApiResponse<T>> {
    const url = `${API_URL}${endpoint}`;

    try {
      const response = await fetch(url, {
        method: "POST",
        credentials: "include",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || "An error occurred",
        };
      }

      return {
        success: true,
        data: data.data ?? data,
        message: data.message || "Success",
      };
    } catch (error) {
      return {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Network error",
      };
    }
  }

  static put<T>(
    endpoint: string,
    body?: unknown,
    options: RequestInit = {}
  ) {
    return this.request<T>(endpoint, {
      ...options,
      method: "PUT",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  }

  static patch<T>(
    endpoint: string,
    body?: unknown,
    options: RequestInit = {}
  ) {
    return this.request<T>(endpoint, {
      ...options,
      method: "PATCH",
      body: body !== undefined ? JSON.stringify(body) : undefined,
    });
  }

  static delete<T>(endpoint: string, options: RequestInit = {}) {
    return this.request<T>(endpoint, {
      ...options,
      method: "DELETE",
    });
  }
}

export default ApiClient;
